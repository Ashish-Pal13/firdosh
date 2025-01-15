import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MinusSquare, PlusSquare, Trash, TrashSimple } from "@phosphor-icons/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";


interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
  title?: string;  
  count?: number;  
}


const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phoneNumber: yup.string().required("Phone number is required").matches(/^\d+$/, "Phone number must be digits only"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
  title: yup.string().optional(),
  count: yup.number().optional(),
});

export interface ImageType {
  src: string; 
  alt: string;
  title: string;
}

interface PopupProps {
  images: ImageType[];
  onClose: () => void;
  onDeleteImage: (imageSrc: string) => void; 
}

export const Addtocart: React.FC<PopupProps> = ({ images, onClose, onDeleteImage }) => {
  const [counters, setCounters] = useState<number[]>(images.map(() => 1)); 
  const router = useRouter()
  
  const addHandler = (index: number) => {
    setCounters((prev) =>
      prev.map((count, i) => (i === index ? count + 1 : count)) 
    );
  };

  const minHandler = (index: number) => {
    setCounters((prev) =>
      prev.map((count, i) => (i === index && count > 1 ? count - 1 : count)) 
    );
  };

  const deleteHandler = (index: number) => {
    const imageSrc = images[index].src; 
    onDeleteImage(imageSrc); 
  };

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const imageDetails = images.map((image, index) => ({
      title: image.title,
      count: counters[index],
    }));

    const imageDetailsString = imageDetails
      .map((detail) => `${detail.title}: ${detail.count}`)
      .join("\n");

    const payload = {
      formData: data,
      images: imageDetails,
    };
    
    toast.success("Form is submitted");
    reset(); 
    onClose(); 
    const whatsappMessage = `Name: ${data.name}\nPhone Number: ${data.phoneNumber}\nEmail: ${data.email}\nMessage: ${data.message}\nImages:\n${imageDetailsString}`;
    router.push(`https://wa.me/7011179418?text=${encodeURIComponent(whatsappMessage)}`);
    images.forEach((image) => onDeleteImage(image.src));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-9">
      <div className="bg-[#f3efdf] rounded-lg p-6 shadow-lg">
        <div className="flex flex-col gap-7 overflow-y-auto" style={{ maxHeight: "200px" }}>
          {images.map((image, index) => (
            <div key={index} className="flex gap-5 items-center">
              <Image
                src={image.src}
                alt={image.title}
                style={{ height: "180px", width: "200px" }}
              />
              <div className="flex flex-col gap-1 items-center">
                <div className="text-[16px] font-medium hidden md:block">{image.title}</div>
                <div className="flex items-center gap-2">
                  <div className="text-[32px]">{counters[index]}</div>
                  <div>
                    <PlusSquare size={32} onClick={() => addHandler(index)} />
                    <MinusSquare size={32} onClick={() => minHandler(index)} />
                  </div>
                </div>
              </div>
              <TrashSimple size={32} color="#493616" onClick={() => deleteHandler(index)} className="cursor-pointer transform hover:scale-110 transition-transform duration-300" />
            </div>
          ))}
        </div>
        <hr />
      
        <div className="flex justify-center items-center bg-[#f3efdf]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-lg shadow-md p-6 flex flex-col gap-6 md:flex-row"
          >
            <div className="flex-1">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className={`mt-1 p-1 block w-full rounded-md border border-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  id="phoneNumber"
                  type="text"
                  {...register("phoneNumber")}
                  className={`mt-1 p-1 block w-full rounded-md border border-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                    errors.phoneNumber ? "border-red-500" : ""
                  }`}
                />
                {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={`mt-1 p-1 block w-full rounded-md border border-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className={`mt-1 p-1 block w-full rounded-md border border-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  style={{ maxHeight: "90px" }}
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
              </div>
            </div>

            <div className="flex flex-col md:justify-end gap-3 w-full md:w-auto">
              <button
                type="submit"
                className="px-4 py-2 text-white bg-[#493616] rounded-[25px] shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Submit
              </button>
              <button
                onClick={onClose}
                type="button"
                className="px-4 py-2 bg-white text-black border border-black rounded-[25px] shadow hover:bg-[#493616] hover:border-[#493616] hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};





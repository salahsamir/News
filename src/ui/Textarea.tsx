import { TextareaHTMLAttributes } from "react";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = ({ ...rest }: IProps) => {
  return (
    <textarea
      className="border-[1px] border-gray-300 shadow-md focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-lg p-1 text-md  bg-gray-500"
      rows={6}
    
      {...rest}
    />
  );
};

export default Textarea;

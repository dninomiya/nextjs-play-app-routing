import React from 'react';

type Props = {
  title: string;
  description: string;
};

export default function Note({ title, description }: Props) {
  return (
    <div className="bg-gray-900 mt-6 text-sm rounded-md p-6">
      <h4 className="font-semibold leading-none text-gray-400 mb-5">{title}</h4>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}

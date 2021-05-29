import React from 'react';
import Header from "../../components/Header";

interface EmptyPageProps {
  title?: string

}
const EmptyPage: React.FC<EmptyPageProps> = ({title}) => {
  return (
    <div>
      This is Empty Page for {title}!
    </div>
  );
};

export default EmptyPage;

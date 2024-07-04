// pages/index.tsx
import 'devicon/devicon.min.css';


import Navbar from '@/app/Navbar/Navbar';
import AnimatedIntroduction from '@/components/AnimatedIntroduction/AnimatedIntroduction';
import CustomCursor from '@/components/CustomCursor/CustomCursor';
import MyIntroduction from '@/components/MyIntroduction/MyIntroduction';

const Page: React.FC = () => {
  return (
    <div>
      <CustomCursor />
      <Navbar />
      <AnimatedIntroduction />
      <MyIntroduction />
    </div>
  );
};

export default Page;

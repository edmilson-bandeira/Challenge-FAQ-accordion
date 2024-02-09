import React, { useState } from 'react';

const FAQAccordion = () => {
  const faqs = [
    {
      question: 'What is Frontend Mentor, and how will it help me?',
      answer: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It\'s suitable for all levels and ideal for portfolio building.',
    },
    {
      question: 'Is Frontend Mentor free?',
      answer: 'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
    },
    {
      question: 'Can I use Frontend Mentor projects in my portfolio?',
      answer: 'Yes, you can use projects completed on Frontend Mentor in your portfolio. It\'s an excellent way to showcase your skills to potential employers!',
    },
    {
      question: 'How can I get help if I am stuck on challenge?',
      answer: 'The best place to get help is inside Frontend Mentor\'s Discord community. There\'s a help channel where you can ask questions and seek support from other community members.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className='flex justify-center items-center mt-16 max-sm:mt-0'>
        <div className="w-[1440px] h-[750px] bg-violet-300 relative max-sm:h-screen">
        <img src="images/bg-desktop.svg" alt="" className='max-sm:hidden w-[1440px]'/>
        <img src="images/bg-mobile.svg" alt="" className='sm:hidden w-full'/>
          <div className=' flex justify-center absolute left-0 right-0 top-[190px] max-sm:top-[180px]'>
            <div className="bg-white w-[540px] max-sm:w-[350px] p-5 rounded-md">
              <div className='flex justify-start items-center mb-5 gap-4'>
                <img src="images/icon-star.svg" alt="" width={35} />
                <h1 className=''>FAQs</h1>
              </div>
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    className="flex justify-between items-center font-bold w-full p-2 border-t-2"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className='max-sm:w-[230px] text-start'>{faq.question}</span>
                    <span>{activeIndex === index ? (
                      <img src="images/icon-minus.svg" alt="minus" />
                    ) : (
                      <img src="images/icon-plus.svg" alt="plus" />
                    )}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="mt-2 p-2 opacity-70">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>

      <div className="attribution mt-6">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Edmilson Bandeira</a>.
      </div>
    </>
  );
};

export default FAQAccordion;

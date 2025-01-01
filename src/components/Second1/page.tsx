import React from "react";
import Image from "next/image";

const Second1 = () => {
  return (
    <div>
      <div className="mt-20 ">
        <div>
          <h1 className="heading1">EDITOR'S PICK</h1>
          <p className="heading2 ">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <div>
          <div className="grid md:grid-flow-col  gap-5 justify-center items-center mt-10 mb-10 ">
            <Image
              src="/images/img1.png"
              alt="guy"
              width={250}
              height={300}
              className="md:w-[350px] md:h-[500px]"
            />
            <Image src="/images/img2.png" alt="guy" width={200} height={300} className="md:h-[500px]" />
            <div className="">
              <Image
                src="/images/img3.png"
                alt="guy"
                width={200}
                height={200}
                className="pb-5"
              />
              <Image
                src="/images/img4.png"
                alt="guy"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second1;

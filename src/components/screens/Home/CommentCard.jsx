import React from "react";
import Image from "../../common/Image";
import Flex from "../../common/Flex";

const CommentCard = () => {
  return (
    <div className=" m-[4px] w-[95%] py-[30px] px-10 rounded-[20px] shadow-md">
      <Image src="comma.png" />

      <p className=" mt-[15px] w-[400px] font-roboto font-normal xl:text-[16px] xl:leading-[170%] text-textoff">
        “Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est
        officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore
        ipsum. Proident excepteur ex aliqua cupidatat.”
      </p>

      <Flex className="mt-[30px] items-center gap-5">
        <Image src="/img.png" />
        <h1 className=" font-roboto font-medium xl:text-[16px] xl:leading-[170%] text-black">
          Brooklyn Simmons
        </h1>
      </Flex>
    </div>
  );
};

export default CommentCard;

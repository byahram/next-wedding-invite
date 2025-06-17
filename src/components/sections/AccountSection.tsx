import { IParticipants } from "@/utils/types";
import React, { useState } from "react";
import { Button } from "../common/Buttons";
import { MdContentCopy } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CurvedBackground from "../layout/CurvedBackground";
import SectionTitle from "../common/SectionTitle";

export default function AccountSection({ parts }: IParticipants) {
  const [isOpenGroom, setIsOpenGroom] = useState(false);
  const [isOpenBride, setIsOpenBride] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const toggleGroomAccordion = () => {
    setIsOpenGroom(!isOpenGroom);
  };

  const toggleBrideAccordion = () => {
    setIsOpenBride(!isOpenBride);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <section
      id="account"
      className="relative w-full mx-auto overflow-hidden pt-20 pb-10 bg-[var(--background2)]"
    >
      <CurvedBackground color={"var(--background)"} />

      <div className="flex flex-col items-center text-center">
        <SectionTitle title="Account" subtitle="마음 전하실 곳" />

        <p className="leading-7">
          참석이 어려워 직접 축하를 전하지 못하는 <br /> 분들을 위해 계좌번호를
          기재하였습니다. <br /> 넓은 마음으로 양해 부탁드립니다. <br />
          전해주시는 진심은 소중하게 간직하여 <br />
          좋은 부부의 모습으로 보답하겠습니다.
        </p>

        <p className="mt-4 text-sm text-gray-600 italic">
          ※ 화환은 정중히 사양하겠습니다.
        </p>

        <div className="mt-8 px-8 w-full flex flex-col gap-4">
          <div className="w-full bg-white rounded-lg shadow-md">
            <Button
              variant="account"
              size="account"
              onClick={toggleGroomAccordion}
            >
              <p className="text-[#3680ba] font-semibold text-base">신랑측</p>
              <i className="text-gray-600">
                {isOpenGroom ? (
                  <IoIosArrowUp size={20} />
                ) : (
                  <IoIosArrowDown size={20} />
                )}
              </i>
            </Button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpenGroom ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              {isOpenGroom && (
                <div className="flex flex-col gap-8 py-4 px-6 border-t border-neutral-300">
                  {parts
                    .filter((account) => account.type === "groom")
                    .map((account, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <div className="flex flex-col items-baseline gap-2">
                          <label className="block text-sm font-medium text-gray-700">
                            신랑 {account?.label} <b>{account.name}</b>
                          </label>
                          <span className="text-sm tracking-wide">
                            {account.account}
                          </span>
                        </div>
                        <Button
                          variant="icon_text"
                          size="icon_text"
                          onClick={() => handleCopy(account.account)}
                        >
                          <MdContentCopy size={16} />{" "}
                          <p className="text-xs">복사</p>
                        </Button>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          <div className="w-full bg-white rounded-lg shadow-md">
            <Button
              variant="account"
              size="account"
              onClick={toggleBrideAccordion}
            >
              <p className="text-[#d08c95] font-semibold text-base">신부측</p>
              <i className="text-gray-600">
                {isOpenBride ? (
                  <IoIosArrowUp size={20} />
                ) : (
                  <IoIosArrowDown size={20} />
                )}
              </i>
            </Button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpenBride ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              {isOpenBride && (
                <div className="flex flex-col gap-8 py-4 px-6 border-t border-neutral-300">
                  {parts
                    .filter((account) => account.type === "bride")
                    .map((account, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <div className="flex flex-col items-baseline gap-2">
                          <label className="block text-sm font-medium text-gray-700">
                            신부 {account?.label} <b>{account.name}</b>
                          </label>
                          <span className="text-sm tracking-wide">
                            {account.account}
                          </span>
                        </div>
                        <Button
                          variant="icon_text"
                          size="icon_text"
                          onClick={() => handleCopy(account.account)}
                        >
                          <MdContentCopy size={16} />{" "}
                          <p className="text-xs">복사</p>
                        </Button>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {isCopied && (
          <div className="fixed top-20 w-3/4 bg-neutral-800/50 text-white text-xs p-2 text-center transition-all rounded-xl">
            계좌번호가 복사되었습니다!
          </div>
        )}
      </div>
    </section>
  );
}

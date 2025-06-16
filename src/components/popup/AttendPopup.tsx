"use client";

import { useState, useEffect, useRef } from "react";
import { PopupContainer } from "./PopupContainer";
import { FaRegHeart, FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import ErrorMessage from "../common/ErrorMessage";
import { WeddingInfo } from "@/utils/types";
import { formatDate } from "@/utils/utils";

export default function AttendPopup({
  setShowPopup,
  step,
  info,
}: {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  step: number;
  info: WeddingInfo;
}) {
  const [currentStep, setCurrentStep] = useState(step);
  const [formData, setFormData] = useState({
    group: "",
    attendance: "",
    meal: "",
    name: "",
    companionName: "",
  });
  const [errors, setErrors] = useState({
    group: "",
    attendance: "",
    meal: "",
    name: "",
  });

  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const companionInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.style.overflow = "hidden";
    }, 500);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    document.body.style.overflow = "";
  };

  // Step Common Content
  const StepContent = ({
    stepContent,
    buttonLabel,
    onButtonClick,
  }: {
    stepContent: React.ReactNode;
    buttonLabel: string;
    onButtonClick: () => void;
  }) => (
    <>
      <div className="px-4 py-8 w-full overflow-y-auto flex-1">
        <h2 className="text-md font-bold text-center mb-8">참석 정보</h2>
        {stepContent}
      </div>
      <div className="flex justify-between p-4 border-t border-gray-400/50">
        <button
          onClick={handleClose}
          className="btn-gray w-1/2 border-r border-gray-400/50 cursor-pointer"
        >
          닫기
        </button>
        <button
          onClick={onButtonClick}
          className="btn-black w-1/2 cursor-pointer"
        >
          {buttonLabel}
        </button>
      </div>
    </>
  );

  // Step 1 Content
  const Step1 = () => (
    <>
      <p className="text-sm text-gray-700 mb-6 text-center leading-loose tracking-tighter">
        참석의 부담은 가지지 말아주시고 <br />
        정성껏 준비하기 위해 여쭙는 것이니 <br />
        참석 정보를 알려주시면 감사하겠습니다.
      </p>
      <div className="border-t border-dashed border-gray-300 pt-6 mb-4 text-sm text-gray-700 space-y-3">
        <div className="space-y-1.5 flex flex-col items-center">
          <div className="font-medium flex items-center justify-center">
            <FaRegHeart className="mr-1" size={14} /> 신랑 {info.groom.nameKo} &
            신부 {info.bride.nameKo}
          </div>
          <div className="flex items-center justify-center text-sm text-gray-700">
            <FaRegCalendarAlt className="mr-1" size={14} />{" "}
            {formatDate(info.wedding.dateAndTime)}
          </div>
          <div className="flex items-center justify-center text-sm text-gray-700">
            <IoLocationOutline className="mr-1" size={18} />
            {info.wedding.location}
          </div>
        </div>
      </div>
    </>
  );

  // Step 2 Content
  const Step2 = () => (
    <div className="text-sm space-y-4">
      <InputGroup label="분류">
        <RadioButtons
          name="group"
          options={[
            `신랑 ${info.groom.nameKo}측`,
            `신부 ${info.bride.nameKo}측`,
          ]}
          selectedValue={formData.group}
          onChange={(value) => setFormData({ ...formData, group: value })}
        />
        {errors.group && <ErrorMessage message={errors.group} />}
      </InputGroup>

      <InputGroup label="참석 여부">
        <RadioButtons
          name="attendance"
          options={["참석", "불참"]}
          selectedValue={formData.attendance}
          onChange={(value) => setFormData({ ...formData, attendance: value })}
        />
        {errors.attendance && <ErrorMessage message={errors.attendance} />}
      </InputGroup>

      <InputGroup label="식사 여부">
        <RadioButtons
          name="meal"
          options={["O", "X", "미정"]}
          selectedValue={formData.meal}
          onChange={(value) => setFormData({ ...formData, meal: value })}
        />
        {errors.meal && <ErrorMessage message={errors.meal} />}
      </InputGroup>

      <InputGroup
        label="성함"
        placeholder="참석 대표자 성함을 입력해 주세요."
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        ref={nameInputRef}
      />

      <InputGroup
        label="동행인 성함"
        placeholder="동행인 성함을 입력해 주세요."
        value={formData.companionName}
        onChange={(e) =>
          setFormData({ ...formData, companionName: e.target.value })
        }
        ref={companionInputRef}
      />
    </div>
  );

  const validateForm = () => {
    const newErrors = {
      group: formData.group ? "" : "분류를 선택해주세요.",
      attendance: formData.attendance ? "" : "참석 여부를 선택해주세요.",
      meal: formData.meal ? "" : "식사 여부를 선택해주세요.",
      name: formData.name ? "" : "성함을 입력해주세요.",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert("기능 준비중입니다!");
    }
  };

  return (
    <PopupContainer>
      {currentStep === 1 ? (
        <StepContent
          stepContent={Step1()}
          buttonLabel="참석 정보 전달하기"
          onButtonClick={() => setCurrentStep(2)}
        />
      ) : (
        <StepContent
          stepContent={Step2()}
          buttonLabel="제출하기"
          onButtonClick={handleSubmit}
        />
      )}
    </PopupContainer>
  );
}

function InputGroup({
  label,
  children,
  placeholder,
  value,
  onChange,
  ref,
}: {
  label: string;
  children?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
}) {
  const isNameLabel = label === "성함";

  return (
    <div className={`${!isNameLabel ? "mb-4" : ""}`}>
      <label className="text-base font-medium block mb-2 ml-2">{label}</label>
      {children ? (
        children
      ) : (
        <input
          type="text"
          className="border border-gray-500/50 w-full rounded-md px-4 py-2.5"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          ref={ref}
        />
      )}

      {isNameLabel && value === "" && (
        <ErrorMessage message="성함을 입력해주세요." />
      )}
    </div>
  );
}

function RadioButtons({
  name,
  options,
  selectedValue,
  onChange,
}: {
  name: string;
  options: string[];
  selectedValue: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="w-full flex">
      {options.map((option, index) => (
        <label
          key={option}
          className={`border border-gray-500/50 w-full px-4 py-2.5 cursor-pointer flex items-center justify-center ${
            selectedValue === option ? "bg-neutral-600 text-background" : ""
          } ${index === 0 ? "rounded-l-md" : ""} ${
            index === options.length - 1 ? "rounded-r-md" : ""
          }`}
        >
          <input
            type="radio"
            name={name}
            value={option}
            className="hidden"
            checked={selectedValue === option}
            onChange={() => onChange(option)}
          />
          <span className="flex-1 text-center">{option}</span>
        </label>
      ))}
    </div>
  );
}

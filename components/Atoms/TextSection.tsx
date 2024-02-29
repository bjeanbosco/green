"use client";

import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import GreenDecoratedList from "./greenDecoratedList";
import DecoratedList from "./decoratedList";

interface Props {
  children: React.ReactNode;
  color: string;
}

const TextWrapper = ({ children, color }: Props) => {
  const text = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
  const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsla(180, 7%, 75%, 0.9)",
      "hsla(180, 7%, 75%, 0.9)",
      color,
      color,
      color,
      color,
    ]
  );

  return (
    <div ref={text}>
      <motion.div style={{ opacity, x, color: colorChange }}>{children}</motion.div>
    </div>
  );
};
interface TextSectionProps {
  description: string[];
  color: string;
}
function TextSection({ description, color }: TextSectionProps) {
  return (
    <>
      {description.map((item, index) => (
        <TextWrapper key={index} color={color}>
          {color === "#fff" ? (
            <GreenDecoratedList key={index} color={color} details={item} />
          ) : (
            <DecoratedList key={index} color={color} details={item} />
          )}
        </TextWrapper>
      ))}
    </>
  );
}

export default TextSection;

import React, { Children, Fragment, ReactNode } from "react";
import { VerticalSpacer } from "./Spacer";

interface Props {
  title: string;
  fallback?: ReactNode;
  children?: ReactNode;
}

export default function Feed({ title, fallback, children }: Props) {
  const childrenArray = Children.toArray(children);

  return (
    <section className="block">
      <h2>{title}</h2>
      <VerticalSpacer size={24} />
      {childrenArray.length > 0
        ? childrenArray.map((item, index, list) => (
            <Fragment key={index}>
              {item}
              {index < list.length - 1 && (
                <>
                  <VerticalSpacer size={32} />
                  <hr />
                  <VerticalSpacer size={24} />
                </>
              )}
            </Fragment>
          ))
        : fallback}
    </section>
  );
}

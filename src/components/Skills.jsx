import { motion } from "framer-motion";
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

 export default function renderSkills(list) {
    const isOdd = list.length % 2 !== 0;
    const lastIndex = list.length - 1;

    return (
      <>
        <div className="grid gap-4 sm:grid-cols-2">
          {list
            .slice(0, isOdd ? lastIndex : list.length)
            .map((skill, index) => (
              <motion.article
                key={skill.name}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.08]
                  p-4
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-200/20
                  hover:bg-white/[0.14]
                "
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.45,
                }}
              >
                <CheckCircleIcon
                  className="
                    h-5
                    w-5
                    shrink-0
                    text-cyan-200
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <div>
                  <h4 className="font-semibold text-white">
                    {skill.name}
                  </h4>

                  <small className="text-sm text-sky-200/70">
                    {skill.level}
                  </small>
                </div>
              </motion.article>
            ))}
        </div>

        {isOdd && (
          <div className="mt-4 flex justify-center">
            <motion.article
              className="
                group
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/[0.08]
                p-4
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/[0.14]
                sm:w-1/2
              "
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.45,
              }}
            >
              <CheckCircleIcon
                className="h-5 w-5 shrink-0 text-cyan-200"
              />

              <div>
                <h4 className="font-semibold text-white">
                  {list[lastIndex].name}
                </h4>

                <small className="text-sm text-sky-200/70">
                  {list[lastIndex].level}
                </small>
              </div>
            </motion.article>
          </div>
        )}
      </>
    );
  }
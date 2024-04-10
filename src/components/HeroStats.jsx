import React from "react";

const HeroStats = ({ id, name, img, description }) => {
    return (
        <div
            key={id}
            className="mt-5 shadow-md flex flex-row w-[550px] h-[250px]  bg-[#FFFFFF] p-4 "
        >
            <div className="min-w-[180px] min-h-[180px">
                <img src={`${img.path}.${img.extension}`}
                className="w-[180px] h-[180px]" alt="img_hero" />
            </div>
            <div className="font-bold ml-8">
                <div>{name.toUpperCase()}</div>
                <div className="mt-3 font-normal">
                    {description.length === 0 ? (
                        <div>
                            This character has no information in the data
                            provided.
                        </div>
                    ) : (
                        description
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeroStats;

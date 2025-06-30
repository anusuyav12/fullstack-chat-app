<<<<<<< HEAD
import React from 'react';
=======
import React from 'react'

>>>>>>> cb734c8ff5837d86a4552b5686e9993870fa7fc8
const AuthImagePattern = ({ title, subtitle }) => {
    return (
        <div className = "hidden lg:flex items-center justify-center bg-base-200 p-12">
            <div className = "max-w-md text-center">
                <div className="grid grid-cols-3 gap-3 mb-8">
                    {[...Array(9)].map((_, i) => (
                        <div 
                        key={i}
                        className={`aspect-square rounded-2xl bg-primary/10 ${
                            i % 2 === 0 ? "animate-pulse" : ""
                        }`}
                        />
                    ))}
                </div>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-base-content/60">{subtitle}</p>
            </div>
        </div>
    );
};
export default AuthImagePattern;
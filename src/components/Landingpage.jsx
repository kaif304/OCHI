import React from 'react'

function Landingpage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="text-structure mt-52 px-20 text-9xl font-condensed">
            {
                ["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
                    return <div key={index} className="masker">
                                <h1 className={`leading-[110px] tracking-tighter font-semibold`}>{item}</h1>
                            </div>
                })
            }
        </div>
    </div>
  )
}

export default Landingpage
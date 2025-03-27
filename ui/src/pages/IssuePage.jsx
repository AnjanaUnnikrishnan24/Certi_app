import React from 'react'

const IssuePage = () => {
  return (
    <>
    <div className="bg-slate-300">
    <h2 className="text-left text-2xl font-bold">Certificate Dapp</h2>

    <div className="border-2 border-gray-950 bg-slate-50 w-330 py-6 px-6 mt-[50px] ml-[200px] mr-[200px] mb-[200px]">
    <h3 className="text-2xl mt-7 ml-6">Issue New Certificate</h3>
      <form>
        <label className="pl-8" for="S_course">Select Course*</label>
        <select className="mt-3 ml-7 w-96 h-12 border-2 border-black" name="Course" id="course">
            <option selected>Certified Blockchain Associate</option>
            <option>Certified Blockchain Architect</option>
            <option>Cyber Security</option>
        </select>
        <label className="pl-8"  for="c_id">Certificate Id*</label>
        <input className="mt-3 ml-7 w-96 h-12 border-2 border-black"  type="text" placeholder="Certificate Id" required/>
        <label className="pl-8" for="cname">Candidate name*</label>
        <input className="mt-3 ml-7 w-96 h-12 border-2 border-black"  type="text" placeholder="name" required/>
        <label  className="pl-8" for="grade">Select Grade*</label>
        <select className="mt-3 ml-7 w-96 h-12 border-2 border-black"  name="grade" id="grade">
            <option selected>S</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>Failed</option>
        </select>
        <label className="pl-8"  for="i_date">Issue Date *</label>
        <input className="mt-3 ml-7 w-96 h-12 border-2 border-black" type="date" required/>
        <button  className="border-solid rounded text-white text-sm w-40 h-10 bg-blue-500 ml-9" type="submit" value="Issued">Issue Certificate</button>
      </form>
    </div>
    </div>
    </>
  )
}

export default IssuePage
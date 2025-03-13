export default function Navbar() {
    return(
            <div className="flex justify-around text-center">
        <div>
          <img src="WC-1.svg"></img>
        </div>
        <div>
          <nav>
            <ul className="flex gap-10">
              <li>About</li>
              <li>Features</li>
              <li>FAQs</li>
              <li
                className="uppercase bg-[#5a00a1] text-white w-[149px] p-3 text-[12px] rounded-full font-black">
                download app</li>
            </ul>
          </nav>
        </div>
      </div>
    )
}
import Logo from "@/assets/Logo.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"



const Footer = () => {
  return (
    <footer className="bg-primary--300 py-20" id="footer">
      <div className="w-5/6 mx-auto md:flex items-center justify-between gap-16 ">  
        {/**prima colonna */}
        <div className="w-3/5 basis-1/2">
          <img src={Logo} alt="Logo" />
          <p className="pt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores perferendis debitis consequuntur doloremque fugit nihil quod reprehenderit facilis. Dicta, adipisci asperiores eos quod expedita quaerat libero ipsum beatae laborum magnam. </p>
          <p className="pt-5">© Evogym All Rights Reserved..</p>
        </div>
        
        <div className=" mt-20 basis-1/4">
          <h4 className="my-10 font-bold">OUR SPONSOR</h4>
          <div className="flex md:flex md:flex-col gap-16 ">
            <a href="#footer"><img src={SponsorRedBull} alt="Sponsor-RedBull"/></a>
            <a href=""><img src={SponsorForbes} alt="Sponsor-Forbes"/></a>
            <a href=""><img src={SponsorFortune} alt="Sponsor-Fortune"/></a>
          </div>
        </div>
        {/**seconda colonna */}
        <div className="md:mt-0 mt-10 flex flex-col">
          <div className=" my-16 ">
            <h4 className="font-bold">Link</h4>
            <p className="pt-5">Lorem ipsum dolor sit amet.</p>
            <p className="pt-5">Delectus inventore repudiandae. </p>
            <p className="pt-5"> modi nostrum hic quos animi.</p>
          </div>
          {/**terza colonna */}
          <div className="basis-1/2">
            <h4 className="font-bold">Contact Us</h4>
            <p className="pt-5">Tempus metus mattis risus volutpat egestas.</p>
            <p className="pt-5"><span className=" font-bold">Cell:</span> 02-340293458</p>
            <p className="pt-5"><span className=" font-bold">Location:</span> Italy (MI) Milan - via San Luogo</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
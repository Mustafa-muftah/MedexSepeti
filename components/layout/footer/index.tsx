import { ContactUs } from "./contactUs/contactUs"
import { FooterLinks } from "./footerLinks/footerLinks"
import styles from "./footer.module.scss"
import Image from "next/image";
import PaymentImage from "@/public/payment.jpg"




export const Footer:React.FC =() => {
    return (
      
      <div className={styles.container}>
        <div className={styles.wrapper}>
      <FooterLinks/>
      <ContactUs/>
        </div>
        <Image src={PaymentImage} alt={"payment"} />
        <span>© Copyright 2023   medexsepeti.com </span>
        </div>
    )
}
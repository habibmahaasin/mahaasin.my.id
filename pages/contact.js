import Image from "next/image"
import Link from "next/link"

function Contact({contactlist}){
    return (
        <div className="contact-section">
            <h4 className='page-title mt-2'><span>Get</span> in Touch</h4>
            <p className="x-mini-title mt-3" align='justify'>For <span>Hiring, Business, or Collaboration</span> please contact me via email or other social media bellows.</p>
            {contactlist.map((contact) => {
                return(
                    <div className="social-media" key={contact.id}>
                        <Link href={`${contact.url}`} className='sosmed-url' alt={contact.name} target={"_blank"}>
                            <div className="row align-middle">
                                <div className='col-6 w-25'>
                                    <div className='image-container'>
                                    <Image src={`/social-media/${contact.id}.svg`} className='image' height='100' width='100' alt="profile habib iefan" />
                                    </div>
                                </div>
                                <div className='col-6 w-75'>
                                    <h5 className='mt-3 mb-2'><b>{contact.name}</b></h5>
                                    <p className="s-url">
                                        <span>Url : <i>{contact.url}</i></span>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Contact

export async function getStaticProps(){
    const response = await fetch('https://mahaasin.my.id/api/contact')
    const data = await response.json()
    console.log(data)

    return{
        props:{
            contactlist : data
        }
    }
}
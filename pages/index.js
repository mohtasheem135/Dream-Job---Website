import styles from "../styles/Home.module.css";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image";
import img_1 from "../public/img_2.png"
import img_2 from "../public/img_6.png"
import img_3 from "../public/img_8.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <div>
      <div className={styles.nav_container}>
        <ul className={styles.nav_container_ul}>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
          <h1 className={styles.nav_container_head}>Dream Agency</h1>
          <div className={styles.egg_1}><FontAwesomeIcon className={styles.egg_1_icon} icon={faFacebookF} /></div>
          <div className={styles.egg_2}><FontAwesomeIcon className={styles.egg_2_icon} icon={faLinkedinIn} /></div>
          <div className={styles.egg_3}><FontAwesomeIcon className={styles.egg_3_icon} icon={faInstagram} /></div>
        </ul>
      </div>

      {/* Main Container */}
      <div className={styles.container_1}>
        <div className={styles.container_1_subcontainer_1}>
          <h1 className={styles.head_1}>We Help You</h1>
          <h1 className={styles.head_2}>to grow your</h1>
          <h1 className={styles.head_3}>Business</h1>
          <p className={styles.para_1}>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <button className={styles.btn_1}>Get Started</button>
        </div>
        <div className={styles.container_1_subcontainer_2}>
          <div className={styles.egg}></div>
          <div className={styles.tv}><Image className={styles.img_1} src={img_1} /></div>
        </div>
      </div>


      {/* Slider Container */}

      <div className={styles.container_2}></div>
      <div className={styles.container_2_subordinate}>
        <Carousel
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px" responsive={responsive}>
          <div className={styles.Carousel_1}>
            <div className={styles.card}>
              <div className={styles.card_icon_container}>
                <FontAwesomeIcon className={styles.card_icon} icon={faGlobe} />
              </div>
              <h1 className={styles.card_head}>Web Development</h1>
              <p className={styles.card_para}>
                Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
          <div className={styles.Carousel_1}>
            <div className={styles.card}>
              <div className={styles.card_icon_container}>
                <FontAwesomeIcon className={styles.card_icon} icon={faDesktop} />
              </div>
              <h1 className={styles.card_head}>Web Design</h1>
              <p className={styles.card_para}>
                Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
          <div className={styles.Carousel_1}>
            <div className={styles.card}>
              <div className={styles.card_icon_container}>
                <FontAwesomeIcon className={styles.card_icon} icon={faMobile} />
              </div>
              <h1 className={styles.card_head}>Mobile Web Development</h1>
              <p className={styles.card_para}>
                Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
          <div className={styles.Carousel_1}>
            <div className={styles.card}>
              <div className={styles.card_icon_container}>
                <FontAwesomeIcon className={styles.card_icon} icon={faTelegram} />
              </div>
              <h1 className={styles.card_head}>Digital Marketing</h1>
              <p className={styles.card_para}>
                Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </Carousel>;
      </div>

      {/* Section_3 */}
      <div className={styles.container_3}>
        <div className={styles.container_3_subcontainer_1}>
          <div className={styles.container_3_subcontainer_1_egg}>
            <div className={styles.container_3_subcontainer_1_img}>
              <Image src={img_2} />
            </div>
            <div className={styles.container_3_subcontainer_1_img_3}>
              <Image src={img_3} />
            </div>
          </div>
        </div>
        <div className={styles.container_3_subcontainer_2}>
          <h1 className={styles.container_3_subcontainer_2_head_1}>About Us</h1>
          <h1 className={styles.container_3_subcontainer_2_head_2}>Fake or Real</h1>
          <p className={styles.container_3_subcontainer_2_para_1}>
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
          <p className={styles.container_3_subcontainer_2_para_2}>
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
          <button className={styles.btn_2}>EXPLORE MORE</button>
        </div>
      </div>

      {/* Section_4 */}

      <div className={styles.container_4}></div>
      <h1 className={styles.container_4_head_1}>Our Recent Work</h1>
      <h1 className={styles.container_4_head_2}>By Our Experts</h1>
      <p className={styles.container_4_para}>Lorem Ipsum has been the
        industrys standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book.</p>
      <div className={styles.container_4_slider}>
        <Carousel
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px" responsive={responsive}>
          <div className={styles.Carousel_1}>
            <div className={styles.card}>
              <div className={styles.card_icon_container}>
                <FontAwesomeIcon className={styles.card_icon} icon={faGlobe} />
              </div>
              <h1 className={styles.card_head}>Web Development</h1>
              <p className={styles.card_para}>
                Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
          <div className={styles.Carousel_1}>
            <div className={styles.card}>
              <div className={styles.card_icon_container}>
                <FontAwesomeIcon className={styles.card_icon} icon={faDesktop} />
              </div>
              <h1 className={styles.card_head}>Web Design</h1>
              <p className={styles.card_para}>
                Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
          <div className={styles.Carousel_1}>
            <div className={styles.card}>
              <div className={styles.card_icon_container}>
                <FontAwesomeIcon className={styles.card_icon} icon={faMobile} />
              </div>
              <h1 className={styles.card_head}>Mobile Web Development</h1>
              <p className={styles.card_para}>
                Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
          <div className={styles.Carousel_1}>
            <div className={styles.card}>
              <div className={styles.card_icon_container}>
                <FontAwesomeIcon className={styles.card_icon} icon={faTelegram} />
              </div>
              <h1 className={styles.card_head}>Digital Marketing</h1>
              <p className={styles.card_para}>
                Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </Carousel>;
      </div>

      {/* Section_5 */}

      <div className={styles.container_5}>
        <h1 className={styles.container_5_head_1}>Our Testimonials</h1>
        <h1 className={styles.container_5_head_2}>What Our Clients Are Saying</h1>
        <div className={styles.container_5_slider}>
          <Carousel
            infinite={true}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            responsive={responsive}
            autoPlay={false}
            keyBoardControl={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            ssr={true}
            autoPlaySpeed={2000}
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]} >

            <div className={styles.Carousel_5}>
              <div className={styles.card_5}>
                <div className={styles.card_icon_container_5}>
                  <FontAwesomeIcon className={styles.card_icon_5} icon={faQuoteRight} />
                </div>
                {/* <h1 className={styles.card_head_5}>Mobile Web Development</h1> */}
                <p className={styles.card_para_5}>
                  Lorem Ipsum has been the industrys standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries.
                </p>
                <div className={styles.card_dash_5}></div>
                <p className={styles.card_author}>UI Soup</p>
              </div>
            </div>

            <div className={styles.Carousel_5}>
              <div className={styles.card_5}>
                <div className={styles.card_icon_container_5}>
                  <FontAwesomeIcon className={styles.card_icon_5} icon={faQuoteRight} />
                </div>
                {/* <h1 className={styles.card_head_5}>Mobile Web Development</h1> */}
                <p className={styles.card_para_5}>
                  Lorem Ipsum has been the industrys standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries.
                </p>
                <div className={styles.card_dash_5}></div>
                <p className={styles.card_author}>UI Soup</p>
              </div>
            </div>

            <div className={styles.Carousel_5}>
              <div className={styles.card_5}>
                <div className={styles.card_icon_container_5}>
                  <FontAwesomeIcon className={styles.card_icon_5} icon={faQuoteRight} />
                </div>
                {/* <h1 className={styles.card_head_5}>Mobile Web Development</h1> */}
                <p className={styles.card_para_5}>
                  Lorem Ipsum has been the industrys standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries.
                </p>
                <div className={styles.card_dash_5}></div>
                <p className={styles.card_author}>UI Soup</p>
              </div>
            </div>

            <div className={styles.Carousel_5}>
              <div className={styles.card_5}>
                <div className={styles.card_icon_container_5}>
                  <FontAwesomeIcon className={styles.card_icon_5} icon={faQuoteRight} />
                </div>
                {/* <h1 className={styles.card_head_5}>Mobile Web Development</h1> */}
                <p className={styles.card_para_5}>
                  Lorem Ipsum has been the industrys standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries.
                </p>
                <div className={styles.card_dash_5}></div>
                <p className={styles.card_author}>UI Soup</p>
              </div>
            </div>

            <div className={styles.Carousel_5}>
              <div className={styles.card_5}>
                <div className={styles.card_icon_container_5}>
                  <FontAwesomeIcon className={styles.card_icon_5} icon={faQuoteRight} />
                </div>
                {/* <h1 className={styles.card_head_5}>Mobile Web Development</h1> */}
                <p className={styles.card_para_5}>
                  Lorem Ipsum has been the industrys standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries.
                </p>
                <div className={styles.card_dash_5}></div>
                <p className={styles.card_author}>UI Soup</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      {/* Footer */}

      <div className={styles.container_6}>
        <div className={styles.container_6_subcontainer_1}>
          <h1 className={styles.container_6_subcontainer_1_head}>Dream Agency</h1>
          <p className={styles.container_6_subcontainer_1_para}>
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries.
          </p>
          <p className={styles.container_6_subcontainer_1_para_1}>
            GET IN TOUCH
          </p>
          <div className={styles.container_6_input}>
            <input placeholder="ENTER YOUR EMAIL" className={styles.container_6_inputF} />
            <button className={styles.container_6_btn} >SEND</button>
          </div>
        </div>
        <div className={styles.container_6_subcontainer_2}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29327.902128747275!2d87.85393!3d23.243532249999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1652117633601!5m2!1sen!2sin" className={styles.container_6_map}></iframe>
        </div>
      </div>

    </div>
  );
}

export default Home;
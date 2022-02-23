import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faImage, faFaceSmile, faVideo } from "@fortawesome/free-solid-svg-icons";
import BuyingSpaceLayout from '../../src/components/BuyingSpaceLayout'
import Image from 'next/image'
const Channels = () => {
  const CardComponent = (props) => {
    return (
      <div className="container-fluid shadow-sm p-4 mb-5 bg-white rounded">
        {props.children}
      </div>
    )
  }
  return (
    <BuyingSpaceLayout>
      <div className="container-fluid p-2">
        <div className='row'>
          <div className='col-md-3 shadow-sm p-3 mb-5 bg-white rounded ChannelsLeft'>
            <span className="Channels">
              Channels
            </span>
            <div className="search">
              <FontAwesomeIcon icon={faSearch} />
              <input type="text" className="form-control searchInput" placeholder="Search Here " />
            </div>
            {/* result window */}
            <div className="container-fluid channelContainer">
              <div className="row">
                <div className="col-md-2">
                  <Image src={"/wordPress.png"} alt="wordpress" width={"40px"} height={"40px"} />
                </div>
                <div className="col-md-10">
                  <p className="ChannelName">
                    Wordpress
                  </p>
                </div>
              </div>
            </div>
            {/* result window */}

            {/* result window */}
            <div className="container-fluid channelContainer activeChannel">
              <div className="row">
                <div className="col-md-2">
                  <Image src={"/kento.png"} alt="wordpress" width={"40px"} height={"40px"} />
                </div>
                <div className="col-md-10">
                  <p className="ChannelName">
                    Kentico Kontent
                  </p>
                </div>
              </div>
            </div>
            {/* result window */}
            {/* result window */}
            <div className="container-fluid channelContainer">
              <div className="row">
                <div className="col-md-2">
                  <Image src={"/ghost.png"} alt="wordpress" width={"40px"} height={"40px"} />
                </div>
                <div className="col-md-10">
                  <p className="ChannelName">
                    Ghost CMS
                  </p>
                </div>
              </div>
            </div>
            {/* result window */}

          </div>
          {/* middle layout start */}

          <div className='col-md-6'>
            {/* header title */}
            <div className="container-fluid p-0">
              <div className="row bg-white shadow-sm p-3">
                <div className="col-md-6">
                  <span className="p-3">Kentico Kontent -</span>
                  <span className="fontColorGrey"><div className="Ellipse-1157"></div> online</span>
                </div>
                <div className="col-md-6 d-inline-flex justify-content-end">
                  <div className="profileMeet">
                    <Image src={"/a1.png"} alt="meeting" width={50} height={50} />
                  </div>
                  <div className="profileMeet">
                    <Image src={"/a2.png"} alt="meeting" width={50} height={50} />
                  </div>
                  <div className="profileMeet">
                    <Image src={"/a3.png"} alt="meeting" width={50} height={50} />
                  </div>
                  <div className="profileMeet">
                    <Image src={"/plus.png"} alt="meeting" width={50} height={50} />
                  </div>
                </div>
              </div>
            </div>
            {/* date and line start*/}
            <div className="container-fluid p-0">
              <div className="row p-3">
                <div className="col-md-12">
                  <div className="dateContainer">
                    <div className="Rectangle-343"><p>Wednesday, December 1st</p></div>
                    <div className="Line-1685"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* date and line end */}
            <div className="container-fluid p-0">
              <div className="row shadow-sm p-3">
                <div className="col-md-12">
                  {/* message start */}
                  <div className="row">
                    <div className="col-md-1 p-0 text-center">
                      <div className="profileMeet">
                        <Image src={"/11.png"} alt="meeting" width={50} height={50} />
                      </div>
                    </div>
                    <div className="col-md-11">
                      <span className="inline-block fontBold">Maurice Rodriguez</span><span className="fontColorGrey p-2">10.30AM</span>
                      <div>
                        <span className="inline-block fontColorGrey">Joined to Kentico Kontent channel</span>
                        <span className="fontColorGrey p-2">— take a second to say hello</span>
                      </div>
                    </div>
                  </div>
                  {/* message end */}
                  {/* message start */}
                  <div className="row">
                    <div className="col-md-1 p-0 text-center">
                      <div className="profileMeet">
                        <Image src={"/12.png"} alt="meeting" width={50} height={50} />
                      </div>
                    </div>
                    <div className="col-md-11">
                      <span className="inline-block fontBold">Joanne Wells </span><span className="fontColorGrey p-2">10.30 AM</span>
                      <div>
                        <span className="inline-block fontColorGrey b">Joined to Kentico Kontent channel</span>
                        <span className="fontColorGrey p-2">— take a second to say hello</span>
                      </div>
                    </div>
                  </div>
                  {/* message end */}
                </div>
            {/* comment Section */}
            {/* date and line start*/}
            <div className="container-fluid p-0">
              <div className="row p-3">
                <div className="col-md-12">
                  <div className="dateContainer">
                    <div className="Rectangle-343"><p>Friday , December 3rd</p></div>
                    <div className="Line-1685"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* date and line end */}
            {/* Chat 1 */}
                <div className="container-fluid p-0">
                  <div className="row p-3">
                    <div className="col-md-1">
                    <Image src={"/11.png"} alt="meeting" width={50} height={50} />
                    </div>
                    <div className="col-md-11">
                      <div className="row">
                      <div className="col-md-12">
                        <span className="inline-block fontBold">Maurice Rodriguez </span><span className="fontColorGrey p-2">09:59 AM</span>
                        </div>
                        <div className="col-md-12">
                        <div className="Path-18915">
                        <span className="inline-block ">12 Requirements added
                        </span>              
                            <span className="viewMoreRequirements">
                              <span className="d-inline-block p-2">
                                View
                              </span>
                              <span className="d-inline-block viewMoreChannels">
                              <Image src={"/roundBlue.png"} width={20} height={20} alt="round" />
                              </span>
                            </span>
                        
                        </div>
                        
                        </div>
                      </div>
                    
                    </div>
                  </div>
                </div>
                {/* Chat 1 end*/}
                            {/* Chat 2*/}
                            <div className="container-fluid p-0">
                  <div className="row p-3">
                    <div className="col-md-1">
                    <Image src={"/a1.png"} alt="meeting" width={50} height={50} />
                    </div>
                    <div className="col-md-11">
                      <div className="row">
                      <div className="col-md-12">
                        <span className="inline-block fontBold">John Nielsen</span><span className="fontColorGrey p-2">10:59 AM</span>
                        </div>
                        <div className="col-md-12">
                        <div className="Path-18916">
                        <span className="inline-block ">
                        <span className="fontBold">@ Maurice Rodriguez</span>, check the requirements again and 
                        schedule the meeting! 
                        </span>            
                        </div>
                        
                        </div>
                      </div>
                    
                    </div>
                  </div>
                </div>
                {/* Chat 2 end*/}
                {/* Chat 3 */}
                <div className="container-fluid p-0">
                  <div className="row p-3">
                    <div className="col-md-1">
                    <Image src={"/11.png"} alt="meeting" width={50} height={50} />
                    </div>
                    <div className="col-md-11">
                      <div className="row">
                      <div className="col-md-12">
                        <span className="inline-block fontBold">Maurice Rodriguez </span><span className="fontColorGrey p-2">09:59 AM</span>
                        </div>
                        <div className="col-md-12">
                        <div className="Path-18916">
                        <span className="inline-block ">
                        Yes I have updated the Requirements!
                        </span>              
                        </div>
                        
                        </div>
                      </div>
                    
                    </div>
                  </div>
                </div>
                {/* Chat 3 end*/}
            {/* comment Section end*/}
              </div>
            </div>
            {/* comment start*/}
            <div className="container-fluid p-0">
              <div className="row bg-white shadow-sm p-3">
                <div className="col-md-12">
                  <div className="containerSearch">
                    <div className="row no-gutters">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-12">
                            <div className="chat-box-tray">
                              <div className="chatIPContainer">
                                <input type="text" placeholder="Add comment" />
                                <FontAwesomeIcon icon={faImage} role='button' className="mx-2 text-secondary" />
                                <FontAwesomeIcon icon={faVideo} role='button' className="mx-2 text-secondary" />
                                <FontAwesomeIcon icon={faFaceSmile} role='button' className="mx-2 text-secondary" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* comment end*/}
          </div>
          {/* middle layout end */}
          <div className='col-md-3'>
            <CardComponent>
              <div className="row">
                <div className="col-md-2 p-0">
                  <div className="profileMeet">
                    <Image src={"/tristan.png"} alt="meeting" width={50} height={50} />
                  </div>
                </div>
                <div className="col-md-10">
                  <span className="d-block fontBold">Tristan Wells</span>
                  <span className="d-block fontColorGrey">Kentico Kontent’s Sales Agent</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="Rectangle-3 mt-2">Schedule Meeting</div>
                </div>
              </div>
            </CardComponent>
            <CardComponent>
              <div className="row AddedReq">
                <div className="fontBold d-inline w-auto">Added Requirements - 05 </div>
                <Image src={"/edit.svg"} width={20} height={20} alt="" />
              </div>
              <div className="Rectangle-4035">Build website</div>
              <div className="Rectangle-4035">Build blogging site</div>
              <div className="Rectangle-4035">Post blogs site</div>
              <div className="Rectangle-4035">Post blogs and track traffic</div>
              <div className="Rectangle-4035">Host a forum</div>
              <div className="Rectangle-4035">Supports SasS</div>
              <div className="viewMoreRequirements">
                <div className="d-inline-block p-2 fontBold">
                  View More
                </div>
                <div className="d-inline-block viewMoreChannels">
                  <Image src={"/roundBlue.png"} width={20} height={20} alt="round" />
                </div>
              </div>
            </CardComponent>
            <CardComponent>
              <div className="row AddedReq">
                <div className="fontBold d-inline w-auto">Documents/Files/Links - 06 </div>
                <Image src={"/edit.svg"} width={20} height={20} alt="" />
              </div>
              <div className="Rectangle-40 mt-4">
                <div className="d-inline-block viewMoreChannels p-2">
                  <Image src={"/pdf.png"} width={20} height={20} alt="round" />
                </div>
                Quotation-Business Plan
                <span className="p-2 text-black-50">25 MB</span>
              </div>
              <div className="Rectangle-40 text-primary">
                <div className="d-inline-block viewMoreChannels p-2 ">
                  <Image src={"/doc.png"} width={20} height={20} alt="round" />
                </div>
                how-to-choose-headless-cms</div>
              <div className="viewMoreRequirements">
                <div className="d-inline-block p-2 fontBold">
                  View More
                </div>
                <div className="d-inline-block viewMoreChannels">
                  <Image src={"/roundBlue.png"} width={20} height={20} alt="round" />
                </div>
              </div>
            </CardComponent>
          </div>
        </div>
      </div>
    </BuyingSpaceLayout>
  );
}

export default Channels;
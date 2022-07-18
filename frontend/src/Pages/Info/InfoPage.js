import { Container } from "react-bootstrap";
import DefaultNavBar from "../../Components/NoticeBoard/DefaultNavBar";

const InfoPage = () => {
    return ( 
        <div>
            <DefaultNavBar />
            <Container>
                <div className="contents">
                    <div className="row mt-3">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <h1>1. What is Recycling?</h1>
                                <img className="img-fluid rounded" style={{"height":"auto", "width": "50%"}} src="https://recyclemontana.org/wp-content/uploads/2018/01/3Rs-1024x440.jpg" alt="recycling" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p>Recycling is the process of collecting and processing materials that would otherwise be thrown away as trash and converting them into new materials or products. In Singapore, different objects can be recycled in various ways - from plastic bottles to food waste, to even our clothes. There are 3 easy steps to take to prepare our recyclables properly for recycling, read on to find out more!</p>
                        </div>
                    </div>

                    <hr />

                    <div className="row mt-3">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <h1>2. Impact of Recycling</h1>
                                <img className="img-fluid rounded" style={{"height":"auto", "width": "50%"}} src="https://www.nea.gov.sg/images/default-source/our-serivces/semakau-landfill-1.jpg" alt="recycling" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h5>In Singapore</h5>
                            <p>Recycling converts waste into useful products and conserves natural resources. It also reduces the need for incineration and extends the lifespan of Semakau Landfill. Recycling is a great way to protect the environment. Did you know that:</p>
                            <ul>
                                <li>Recycling 1,000kg of paper saves 17 trees.</li>
                                <li>Recycling an aluminum can save 95% of the energy used to make a new one.</li>
                                <li>Recycling a glass bottle saves 30% of the energy used to make a new one.</li>
                            </ul>

                            <p>Of the waste generated in 2018, more than half - almost 4.63 million tonnes - was recycled. Singapore has set a national recycling rate target of 70% in 2030, with</p>
                            <ul>
                                <li>an increase in domestic recycling rate from 22% in 2018 to 30% in 2030, and</li>
                                <li>an increase for the non-domestic recycling rate from 74% in 2018 to 81% in 2030.</li>
                            </ul>
                        </div>
                    </div>

                    <hr/>

                    <div className="row mt-3">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <h1>3. Recycling Myths</h1>
                                <img className="img-fluid rounded" style={{"height":"auto", "width": "50%"}} src="https://media.istockphoto.com/vectors/myth-and-fact-buttons-in-3d-style-vector-illustration-vector-id1207520672?k=20&m=1207520672&s=612x612&w=0&h=DMDNKKzeVF9vBe270P89N9jjFxzGFL7UpEuNRGRcoGA=" alt="recycling" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ol>
                                <li>
                                    <strong>"There is no point recycling, it doesn't make a difference"</strong>
                                    <p>Recycling stops tonnes of waste being buried in landfill. In the UK, recycling saves about 10-15 million tonnes of carbon emissions a year, the equivalent of taking 3.5 million cars off the road.</p>
                                </li>
                                
                                <li>
                                    <strong>"My recycling will end up getting thrown away with the rubbish anyway"</strong>
                                    <p>Your recycled material is a valuable resource. Once it has been collected from your doorstep it is then sorted, bailed and transported to reprocessors to be made into new products.</p>
                                </li>
                                <li>
                                    <strong>"I don’t create any food waste so I don’t need to use a food waste collection"</strong>
                                    <p>We all create some unavoidable food waste such as peelings, egg shells, teabags and bones. If you have a food waste collection at home these can go in your food waste caddy.</p>
                                </li>
                                <li>
                                    <strong>"Paper can only be recycled a few times"</strong>
                                    <p>Whilst it is true that paper fibres start to break down once they have been recycled five-six times, even then they can still be put to good use in egg cartons, loft insulation, paints and even new road surfaces.</p>
                                </li>
                                <li>
                                    <strong>"Recycling metal uses more energy than extracting the raw material"</strong>
                                    <p>This is not true. Mining and processing metal uses huge amounts of resources and energy. Recycling cans saves up to 95% of the energy needed to make new cans from raw material.</p>
                                </li>

                            </ol>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-3">
                        <div className="col-lg-4">
                            <div className="text-center">
                                <h1>4. What can I recycle?</h1>
                                <img className="img-fluid rounded" style={{"height":"auto", "width": "50%"}} src="https://media.istockphoto.com/vectors/different-colored-recycle-bins-different-waste-suitable-for-recycling-vector-id1206487598" alt="recycling" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h5 className="text-success">Can Recycle in Blue bins:</h5>
                            <ul>
                                <li><strong>Plastic</strong><p>beverage bottles, ziplock bags, plastic bag, bubble wraps, containers, film packaging, shampoo/soap/detergent bottles</p></li>
                                <li><strong>Paper</strong><p>newspapers, books, paper packaging, envelopes, flyers, flattened cardboard boxes, paperboard, toilet rolls, egg trays</p></li>
                                <li><strong>Glass</strong><p>liquor bottles, mason jars, sauce & condiment bottles/jars, drinking/wine glasses, perfume/cosmetics/medicine bottles</p></li>
                                <li><strong>Metal</strong><p>biscuit tins, metal containers, beverage cans, food cans, paint cans (no liquid paint left), old medals (without ribbon)</p></li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h5 className="text-danger">CANNOT Recycle in Blue bins:</h5>
                            <ul>
                                <li><strong>'Paper'</strong>
                                    <ul>
                                        <li>Disposable food & drink packaging</li>
                                        <li>Glitter papers, crayon drawings</li>
                                        <li>Used paper towels, tissues</li>
                                        <li>Plants, wooden chopsticks, wooden planks</li>
                                    </ul>
                                </li>
                                <li><strong>'Plastic'</strong>
                                    <ul>
                                        <li>Polystyrene foam and plastic</li>
                                        <li>Packaging with foil - e.g, potato chip bags, empty blister packs</li>
                                        <li>Melamine products - e.g., dishware, nonstick pans</li>
                                        <li>Expired credit cards, toys</li>
                                        <li>cooler boxes & packaging peanuts</li>
                                        <li>Containers that are usable like Tupperware, disposable for takeout like styrofoam or contaminated with food</li>
                                    </ul>
                                </li>

                                <li><strong>'Glass'</strong>
                                    <ul>
                                        <li>Oven-safe food containers, pyrex glassware</li>
                                        <li>Tempered glass, crystal glass</li>
                                        <li>Mirror, porcelain & ceramics</li>
                                        <li>Glass with metal wires</li>
                                        <li>Spectacles, light bulbs (for e-waste bins)</li>
                                    </ul>
                                </li>

                                <li><strong>'Metal'</strong>
                                    <ul>
                                        <li>Expired credit cards, toys</li>
                                        <li>Rusty metal cans (small amount of rust is ok)</li>
                                        <li>Dirty aluminum foil and trays</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-3">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <h1>5. Process of Recycling</h1>
                                <img className="img-fluid rounded" style={{"height":"auto", "width": "50%"}} src="https://www.bpf.co.uk/Data/Content/images/plastic-recycling-process.jpg" alt="recycling" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h5>Requirements:</h5>
                            <ul>
                                <li>Clean and dry, with cap left on tightly</li>
                                <li>Cardboard pizza delivery boxes without leftovers or liners should be recycled; but leftover crusts, cheese and other food should not.</li>
                            </ul>
                            <h5>How to Recycle:</h5>
                            <ol>
                                <li>
                                    <strong>Clean, sort and separate</strong>
                                    <ul>
                                        <li>Ensure that they are recyclables - some packaging may have a recycling symbol on it to indicate that they can be recycled.</li>
                                        <li>Discard any that are non-recyclables or are contaminated/rusty.</li>
                                        <li>Clean them thoroughly</li>
                                        <li>Sort them according to plastic, paper, glass, and metal then e-waste, textile, used shoes</li>
                                    </ul>
                                </li>
                                <li>
                                <strong>Locate your nearest recycling facilities</strong>
                                <ul>
                                    <li>Take note that different recyclables have different recycling facilities</li>
                                    <li>check out <a href="https://www.nea.gov.sg/our-services/waste-management/3r-programmes-and-resources/recycling-collection-points" target="_blank">NEA's website</a> for more information on where you can recycle!</li>
                                </ul>
                                </li>
                                <li>Place recyclables into bin or collection area</li>
                            </ol>
                        </div>
                    </div>

                    <hr />

                    <div className="row mt-3">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <h1>6. What happens to recyclables in blue recycling bin?</h1>
                                <img className="img-fluid rounded" style={{"height":"auto", "width": "50%"}} src="https://futr.sg/wp-content/uploads/2022/02/shutterstock_1289115262.jpg" alt="recycling" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                        




                            <ul>
                                <li>Recyclables are collected by a dedicated recycling truck and sent to a Materials Recovery Facility (MRF).</li>
                                <li>At the MRF, the recyclables will be sorted out into paper, glass, metal and plastic.</li>
                                <li>After sorting each type of waste is packed into bundles.</li>
                                <li>The bundles are then sent to recycling plants for recycling</li>
                                <li>Learn more <a href="https://www.nea.gov.sg/our-services/waste-management/3r-programmes-and-resources/types-of-recyclables-and-recycling-processes" target="_blank">here</a>!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
     );
}
 
export default InfoPage;
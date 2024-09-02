import React from 'react';
import pattern from '../../assets/web/pattern.jpeg';
import PlayStoreImg from '../../assets/web/play_store.png';
import AppStore from '../../assets/web/app_store.png';

const bannerImg = {
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
};

const AppStoreBanner = () => {
    return (
        <div className="bg-white dark:bg-black dark:text-white">
            <div className="container  pb-14">
                <div
                    className="text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
                    style={bannerImg}
                >
                    <div className="space-y-6 max-w-xl mx-auto">
                        <h2
                            data-aos="fade-up"
                            className="text-2xl text-center sm:text-4xl font-semibold font-serif"
                        >
                            Comece a usar nosso aplicativo
                        </h2>
                        <p data-aos="fade-up" className="text-center sm:px-20">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Dolore distinctio dolores recusandae
                        </p>
                        <div
                            data-aos="fade-up"
                            className="flex flex-wrap justify-center items-center gap-4"
                        >
                            <a href="">
                                <img
                                    src={PlayStoreImg}
                                    alt="PlayStore"
                                    className="max-w-[150px] sm:max-w-[120px] md:max-w=[200px]"
                                />
                            </a>
                            <a href="">
                                <img
                                    src={AppStore}
                                    alt="PlayStore"
                                    className="max-w-[150px] sm:max-w-[120px] md:max-w=[200px]"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppStoreBanner;

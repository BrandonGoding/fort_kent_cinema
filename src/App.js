import './output.css';
import BackgroundImageHero from "./components/background-img-hero/BackgroundImageHero";
import ShowTimes from "./components/showtimes/ShowTimes";
import NowPlaying from "./components/now-playing/NowPlaying";
import {SwatchIcon, ClockIcon} from '@heroicons/react/20/solid'


const navigation = [
    // {
    //     name: "Home",
    //     href: "#",
    // }
]

const nowPlaying = [
    {
        title: "Deadpool & Wolverine",
        startDate: "July 26th",
        plot: "",
        features: [
            {
                name: 'Rated:',
                description:
                    'R',
                icon: SwatchIcon,
            },
            {
                name: 'Running Time:',
                description: '2h 7m',
                icon: ClockIcon,
            },
        ],
    },
    {
        title: "Twisters",
        startDate: "July 26th",
        features: [
            {
                name: 'Rated:',
                description:
                    'PG-13',
                icon: SwatchIcon,
            },
            {
                name: 'Running Time:',
                description: '2h 2m',
                icon: ClockIcon,
            },
        ],
    }
]


function App() {
    return (
        <div className="App">
            <BackgroundImageHero navigation={navigation}/>
            <div className="overflow-hidden bg-white py-12 sm:py-16">
                <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-center mb-12 sm:mb-16">Now Playing at Fort Kent Cinema</h2>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {nowPlaying.map((movie) => (
                            <NowPlaying title={movie.title} starting={movie.startDate} features={movie.features}/>
                        ))}
                    </div>
                </div>
            </div>
            <ShowTimes/>
        </div>
    );
}

export default App;

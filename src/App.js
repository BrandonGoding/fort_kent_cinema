import './output.css';
import BackgroundImageHero from "./components/background-img-hero/BackgroundImageHero";
import ShowTimes from "./components/showtimes/ShowTimes";
import NowPlaying from "./components/now-playing/NowPlaying";
import {SwatchIcon, ClockIcon} from '@heroicons/react/20/solid'
import Footer from "./components/footer/Footer";
import BlogTeaser from "./components/blog_teasers/BlogTeaser";
import BlogPost from "./components/blog_post/BlogPost";
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';


const navigation = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Blog",
        href: "/fort-kent-cinema-blog"
    }
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


function HomePage() {
    return (
        <>
            <BackgroundImageHero navigation={navigation} />
            <div className="overflow-hidden bg-white py-12 sm:py-16">
                <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-center mb-12 sm:mb-16">Now Playing at Fort Kent Cinema</h2>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {nowPlaying.map((movie) => (
                            <NowPlaying key={movie.title} title={movie.title} starting={movie.startDate} features={movie.features}/>
                        ))}
                    </div>
                </div>
            </div>
            <ShowTimes />
            <BlogTeaser />
        </>
    );
}

function BlogPage() {
    const { postName } = useParams();
    return (
        <>
            <BackgroundImageHero navigation={navigation} />
            <BlogPost postName={postName} />
        </>
    );
}


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/fort-kent-cinema-blog/:postName" element={<BlogPage />} />
                </Routes>
                <Footer navigation={navigation} />
            </div>
        </Router>
    );
}

export default App;

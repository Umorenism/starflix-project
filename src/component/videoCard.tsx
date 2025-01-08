import React, { useState, useEffect, useRef } from "react";
import { formatDistanceToNow } from "date-fns";
import Hls from "hls.js";

import avatar1 from "../asset/images/avatar/1.jpg";
import avatar2 from "../asset/images/avatar/2.jpg";
import avatar3 from "../asset/images/avatar/3.jpg";
import avatar4 from "../asset/images/avatar/4.jpg";
import avatar5 from "../asset/images/avatar/5.jpg";
// import coin from "../asset/images/coins/red-coin.webp";
interface ScrollVideoProps {
  src: string;
  thumbnail: string;
  isMuted: boolean;
  toggleMute: () => void;
}

interface Story {
  id: number;
  username: string;
  avatar: string;
}

interface Post {
  _id: string;
  avartar?: string;
  userName: string;
  createdAt: string;
  postType: string;
  file: { filepath: string; thumbnailUrl?: string }[];
  likes: number;
}

// ScrollVideo component
const ScrollVideo: React.FC<ScrollVideoProps> = ({
  src,
  thumbnail,
  isMuted,
  toggleMute,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current!);

      return () => hls.destroy();
    } else if (
      videoRef.current &&
      videoRef.current.canPlayType("application/vnd.apple.mpegurl")
    ) {
      videoRef.current.src = src;
    }
  }, [src]);

  useEffect(() => {
    const videoElement = videoRef.current; // Create a local variable to store the reference

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoElement) {
          videoElement.play();
        } else if (videoElement) {
          videoElement.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement); // Cleanup using the local variable
      }
    };
  }, []); // This dependency array ensures that the effect only runs once

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        loop
        playsInline
        poster={thumbnail}
        className="w-full object-cover rounded-lg"
      />
      <button
        onClick={toggleMute}
        className="absolute top-2 right-2 bg-gray-800 bg-opacity-75 text-white px-2 py-1 rounded-md text-sm flex items-center"
      >
        <i className={`fas ${isMuted ? "fa-volume-mute" : "fa-volume-up"}`}></i>
      </button>
    </div>
  );
};

// Reels component
const Reels: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<"movies" | "feeds">("movies");
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [globalMute, setGlobalMute] = useState<boolean>(true);

  const [stories] = useState<Story[]>([
    { id: 1, username: "alex_travels", avatar: avatar1 },
    { id: 2, username: "foodie_jen", avatar: avatar2 },
    { id: 3, username: "mike_photos", avatar: avatar3 },
    { id: 4, username: "nature_sam", avatar: avatar4 },
    { id: 5, username: "pet_lover", avatar: avatar5 },
  ]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://starfaceapi.site/api/post/get-posts"
        );
        const data = await response.json();
        setPosts(data.posts);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const toggleGlobalMute = () => {
    setGlobalMute((prev) => !prev);
  };

  const movies = [
    {
      id: 1,
      title: "The Adventure Begins",
      duration: "2h 15m",
      coin: 50,
      poster: avatar1,
    },
    {
      id: 2,
      title: "Summer Dreams",
      duration: "1h 45m",
      coin: 100,
      poster: avatar2,
    },
    {
      id: 3,
      title: "City Lights",
      duration: "2h 30m",
      coin: 30,
      poster: avatar3,
    },
    {
      id: 4,
      title: "The Last Journey",
      duration: "2h 10m",
      coin: 25,
      poster: avatar4,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Stories */}
      <div className="w-full mx-auto mt-2">
        <div className="bg-white border rounded-lg p-4 mb-4 overflow-x-auto">
          <div className="flex gap-4">
            {stories.map((story) => (
              <div key={story.id} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full ring-2 ring-pink-500 p-1">
                  <img
                    src={story.avatar}
                    alt={`${story.username}'s story`}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span className="text-xs mt-1">{story.username}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex gap-4 border-b mb-4">
            <button
              onClick={() => setCurrentTab("movies")}
              className={`pb-2 px-4 ${
                currentTab === "movies"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
            >
              Movies
            </button>
            <button
              onClick={() => setCurrentTab("feeds")}
              className={`pb-2 px-4 ${
                currentTab === "feeds"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
            >
              Reels
            </button>
          </div>

          {isLoading ? (
            <div className="text-center">Loading...</div>
          ) : currentTab === "feeds" ? (
            <div className="grid grid-cols-1  md:grid-cols-2 gap-6 mb-8 ">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="bg-white border rounded-lg shadow-md"
                >
                  {/* User Info */}
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center">
                      <img
                        src={post.avartar || "default-avatar.jpg"}
                        alt={post.userName}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="ml-3">
                        <span className="font-semibold">{post.userName}</span>
                        <p className="text-gray-500 text-sm">
                          {formatDistanceToNow(new Date(post.createdAt), {
                            addSuffix: true,
                          })}
                        </p>
                      </div>
                    </div>
                    <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg shadow-sm hover:bg-blue-600 transition-colors duration-200">
                      Follow
                    </button>
                  </div>

                  {/* Content */}
                  {post.postType === "video" && post.file[0]?.filepath ? (
                    <ScrollVideo
                      src={post.file[0].filepath}
                      thumbnail={post.file[0].thumbnailUrl || ""}
                      isMuted={globalMute}
                      toggleMute={toggleGlobalMute}
                    />
                  ) : (
                    <img
                      src={post.file[0]?.filepath || "default-image.jpg"}
                      alt="Post content"
                      className="w-full object-cover rounded-lg"
                    />
                  )}

                  {/* Like and Comment */}
                  <div className="p-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <i className="fas fa-heart text-red-500"></i>
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fas fa-comment"></i>
                      <span>Comment</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            //   {movies.map((movie) => (
            //     <div
            //       key={movie.id}
            //       className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            //     >
            //       <img
            //         src={movie.poster}
            //         alt={movie.title}
            //         className="w-full h-48 object-cover rounded-t-lg"
            //       />
            //       <div className="p-4">
            //         <h3 className="text-lg font-semibold">{movie.title}</h3>
            //         <p className="text-gray-500">{movie.duration}</p>
            //         <div className="flex items-center gap-2 mt-2">
            //           <img src={coin} alt="Coin" className="w-4 h-4" />
            //           <span className="text-sm">{movie.coin}</span>
            //         </div>
            //       </div>
            //     </div>
            //   ))}
            // </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Movie Thumbnail with Duration */}
                  <div className="aspect-[2/3] relative">
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {movie.duration}
                    </div>
                  </div>

                  {/* Movie Info */}
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      {movie.title}
                    </h3>
                    <div className="flex justify-between items-center">
                      {/* Coin Amount */}
                      <div className="text-gray-600 text-sm flex items-center gap-1">
                        <span>Earn {movie.coin} STAR</span>
                      </div>

                      {/* Watch Now Button */}
                      <button
                        // onClick={() => handleWatchNow(movie.id)}
                        className="bg-pink-500 text-white text-sm px-3 py-1 rounded hover:bg-pink-600"
                      >
                        Watch Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reels;

import { useState } from "react";
import VideoCard from "./videocard";
import { videos } from "./dummyvideos";
import { Copyright } from "lucide-react";

const Home = ({ likedVideos, watchLaterVideos, onLike, onWatchLater }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-8 mb-16">
          <div className="bg-gradient-to-r from-pink-500 to-pink-200 text-white p-10 rounded-xl shadow-lg flex-1">
            <h3 className="text-lg font-semibold mb-4">Total Videos</h3>
            <p className="text-4xl font-bold">{videos.length}</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-200 text-white p-10 rounded-xl shadow-lg flex-1 border-2 border-turquoise-300">
            <h3 className="text-lg font-semibold mb-4">Watch Later</h3>
            <p className="text-4xl font-bold">{watchLaterVideos.length}</p>
          </div>
          <div className="bg-gradient-to-r from-emerald-500 to-blue-100 text-white p-10 rounded-xl shadow-lg flex-1">
            <h3 className="text-lg font-semibold mb-4">Liked Videos</h3>
            <p className="text-4xl font-bold">{likedVideos.length}</p>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onLike={onLike}
              onWatchLater={onWatchLater}
              isLiked={likedVideos.includes(video.id)}
              isInWatchLater={watchLaterVideos.includes(video.id)}
            />
          ))}
        </div>

        {/* Empty State (if no videos) */}
        {videos.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">📺</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              No videos found
            </h3>
            <p className="text-gray-600">Check back later for new content!</p>
          </div>
        )}

        {/* Copyright Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Copyright size={16} />
            <span className="text-sm">
              2024 YouTube 2.0. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

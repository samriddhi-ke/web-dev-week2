import VideoCard from "./videocard";
import { videos } from "./dummyvideos";
import { Clock, Heart } from "lucide-react";

const WatchLater = ({
  likedVideos,
  watchLaterVideos,
  onLike,
  onWatchLater,
}) => {
  const watchLaterVideoData = videos.filter((video) =>
    watchLaterVideos.includes(video.id)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-blue-500 rounded-xl">
              <Clock className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Watch Later</h1>
              <p className="text-gray-600">
                Your saved videos ({watchLaterVideoData.length} videos)
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        {watchLaterVideoData.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Total Saved
                  </h3>
                  <p className="text-3xl font-bold text-blue-600">
                    {watchLaterVideoData.length}
                  </p>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Clock className="text-blue-600" size={24} />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Also Liked
                  </h3>
                  <p className="text-3xl font-bold text-red-500">
                    {
                      watchLaterVideoData.filter((video) =>
                        likedVideos.includes(video.id)
                      ).length
                    }
                  </p>
                </div>
                <div className="p-3 bg-red-100 rounded-lg">
                  <Heart className="text-red-500" size={24} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Grid */}
        {watchLaterVideoData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {watchLaterVideoData.map((video) => (
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
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-blue-500" size={48} />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              No videos saved yet
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Start exploring videos and add them to your Watch Later list to
              see them here.
            </p>
            <a
              href="/"
              className="inline-flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200"
            >
              <span>Browse Videos</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchLater;

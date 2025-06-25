import { useState, useEffect } from 'react';
import { Heart, Plus, Check, Eye, Clock } from 'lucide-react';

const VideoCard = ({ video, onLike, onWatchLater, isLiked, isInWatchLater }) => {
  const [showFeedback, setShowFeedback] = useState('');

  const handleLike = () => {
    onLike(video.id);
    setShowFeedback('liked');
    setTimeout(() => setShowFeedback(''), 2000);
  };

  const handleWatchLater = () => {
    onWatchLater(video.id);
    setShowFeedback(isInWatchLater ? 'removed' : 'added');
    setTimeout(() => setShowFeedback(''), 2000);
  };

  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100">
      {/* Feedback Toast */}
      {showFeedback && (
        <div className="absolute top-4 left-4 z-10 bg-black/80 text-white px-3 py-1.5 rounded-full text-sm font-medium animate-fade-in">
          {showFeedback === 'liked' && '❤️ Liked!'}
          {showFeedback === 'added' && '✅ Added to Watch Later'}
          {showFeedback === 'removed' && '🗑️ Removed from Watch Later'}
        </div>
      )}

      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        
        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
          {video.duration}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {video.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-2 font-medium">
          {video.channel}
        </p>
        
        <div className="flex items-center text-gray-500 text-xs space-x-3 mb-4">
          <div className="flex items-center space-x-1">
            <Eye size={12} />
            <span>{video.views} views</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={12} />
            <span>{video.time}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
              isLiked 
                ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Heart 
              size={16} 
              className={isLiked ? 'fill-current' : ''} 
            />
            <span className="text-sm font-medium">
              {isLiked ? 'Liked' : 'Like'}
            </span>
          </button>

          <button
            onClick={handleWatchLater}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
              isInWatchLater 
                ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' 
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {isInWatchLater ? <Check size={16} /> : <Plus size={16} />}
            <span className="text-sm font-medium">
              {isInWatchLater ? 'Added' : 'Watch Later'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

import React, { useState } from "react";
import youtubeApi from "../../api/youtube";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";

const SearchContainer = () => {
  const [title, setTitle] = useState("");
  const [videoData, setVideoData] = useState({
    videoMetaInfo: [],
    selectedVideoId: null,
    selectedVideoTitle: "",
    selectedVideoDesc: "",
    selectedVideoChannel: "",
  });

  const onVideoSelected = (videoId, title, desc, channel) => {
    setVideoData({
      ...videoData,
      selectedVideoId: videoId,
      selectedVideoTitle: title,
      selectedVideoDesc: desc,
      selectedVideoChannel: channel,
    });
  };

  const handleSearchChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSearch = async (keyword) => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword,
      },
    });

    setVideoData({
      videoMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId,
      selectedVideoTitle: response.data.items[0].snippet.title,
      selectedVideoDesc: response.data.items[0].snippet.description,
      selectedVideoChannel: response.data.items[0].snippet.channelTitle,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(title);
  };

  return (
    <div className="search__container text-white">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="d-flex flex-column align-center text-center pb-5">
          <label className="search__title h1 mt-5 mb-0">
            Потърсете име на песен
          </label>
          <p className="search__desc">
            Потърсете и добавете песни към вашата история, за да видите
            статистики за тях
          </p>
          <input
            className="search__input text-center mx-auto"
            value={title}
            onChange={handleSearchChange}
            type="text"
            placeholder="Въведете име на песен"
          />
          <input
            value="Търси"
            type="submit"
            className="btn btn-search btn-light text-danger mx-auto my-4"
          />
        </div>
      </form>
      <VideoDetails
        videoId={videoData.selectedVideoId}
        title={videoData.selectedVideoTitle}
        desc={videoData.selectedVideoDesc}
        channel={videoData.selectedVideoChannel}
      />
      <VideoList
        onVideoSelected={onVideoSelected}
        data={videoData.videoMetaInfo}
      />
    </div>
  );
};

export default SearchContainer;

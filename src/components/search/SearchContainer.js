import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
    <Container fluid className="text-white g-0">
      <div className="pb-5 text-center">
        <label htmlFor="search" className="search__title h1 mt-5 mb-0">
          Потърсете име на песен
        </label>
        <p>
          Потърсете и добавете песни към вашата история, за да видите статистики
          за тях
        </p>
        <form
          className="d-flex flex-column align-center text-center"
          onSubmit={handleSubmit}>
          <input
            className="text-center mx-auto"
            value={title}
            onChange={handleSearchChange}
            type="text"
            placeholder="Въведете име на песен"
            name="search"
            id="search"
          />
          <input
            value="Търсене"
            type="submit"
            className="search-button btn btn-light text-danger mx-auto my-4"
          />
        </form>
      </div>
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
    </Container>
  );
};

export default SearchContainer;

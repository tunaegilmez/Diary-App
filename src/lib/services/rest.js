import Http from "./http";
import ENV from "../../stage.env";

const getDiaries = (limit, skip) => {
  let data = {};
  if (limit) {
    data.limit = limit;
  }
  if (skip) {
    data.skip = skip;
  }
  return Http.get(`${ENV.API_URL}/diary`, { ...data });
};

const addDiary = data => {
  return Http.post(`${ENV.API_URL}/diary`, data);
};

const updateDiary = (diaryId, data) => {
  return Http.patch(`${ENV.API_URL}/diary/${diaryId}`, {
    ...data,
  });
};

const getDiary = diaryId => {
  console.log("get diary diaryId", diaryId);
  return Http.get(`${ENV.API_URL}/diary/${diaryId}`);
};

const deleteDiary = diaryId => {
  return Http.delete(`${ENV.API_URL}/diary/${diaryId}`);
};

export default {
  getDiaries,
  addDiary,
  updateDiary,
  getDiary,
  deleteDiary,
};

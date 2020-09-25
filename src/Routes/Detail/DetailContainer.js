import React from "react";
import { moviesApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
      //const isMovie = (pathname) => pathname.includes("/movie/")를 componentDidMount에 넣는 대신에 전체 class에 넣어주기 위해서 (렌더링 할 것이 없을 때 사용 가능. 만약에 뭔가를 렌더링 하려면 this.state에 넣어야 함.)
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props; //parseInt(id) id라는 string을 숫자로 변환 if it is not number it return NaN.
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        ({
          data: { result },
        } = await moviesApi.movieDetail(parsedId));
      } else {
        ({
          data: { result },
        } = await tvApi.tvDetail(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    console.log(this.state);
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}

import { Fragment, Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { HOME_PAGE, PAGES, PARTNER, BLOG_DETAIL } from "../apis";
import { transformUrl, prefetchData } from "../libs";
import dynamic from "next/dynamic";

const ModelContainer = dynamic(
  () => import("../containers/Home/components/ModelContainer"),
  {
    ssr: false,
  }
);

const ThreeJSPage = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <Fragment>
      <Canvas id="three-canvas-container" shadows>
        <Suspense fallback={null}>
          <ModelContainer />
        </Suspense>
      </Canvas>
      <Fragment>
        <div className="point point-0">
          <div className="label">?</div>
          <div className="text">Lorem ipsum dolor sit amet sit amet sit amet elit.</div>
        </div>
        <div className="point point-1">
          <div className="label">?</div>
          <div className="text">Lorem ipsum dolor sit amet sit amet sit amet elit.</div>
        </div>
        <div className="point point-2">
          <div className="label">?</div>
          <div className="text">Lorem ipsum dolor sit amet sit amet sit amet elit.</div>
        </div>
        <div className="point point-3">
          <div className="label">?</div>
          <div className="text">Lorem ipsum dolor sit amet sit amet sit amet elit.</div>
        </div>
      </Fragment>
    </Fragment>
  );
};

export default ThreeJSPage;

export async function getServerSideProps({ params }) {
  try {
    const urls = [
      transformUrl(PAGES, {
        type: HOME_PAGE,
        fields: "*",
      }),

      transformUrl(PAGES, {
        type: BLOG_DETAIL,
        fields: "*",
        is_on_homepage: true,
        limit: 3,
      }),

      transformUrl(PARTNER, {
        fields: "*",
        is_on_homepage: true,
        limit: 4,
      }),
      transformUrl(`${PAGES}4`, {}),
    ];

    const { resList, fallback } = await prefetchData(urls);

    return {
      props: {
        initData: resList,
        fallback,
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}

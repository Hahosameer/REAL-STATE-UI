import React, { Suspense } from 'react';
import './listPage.scss';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';
import { Await, useLoaderData } from 'react-router-dom';
import loader from "../../../public/loder.gif"; // Ensure this is the correct path

function ListPage() {
  const data = useLoaderData();
  console.log(data, "datalist");

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {/* Fallback with loader while posts are being fetched */}
          <Suspense  fallback={<img style={{width: "30px"}} src={loader} alt="loader" />}>
            <Await
              resolve={data?.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                postResponse?.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>

      <div className="mapContainer">
      <Suspense  fallback={<img style={{width: "30px"}} src={loader} alt="loader" />}>
          <Await
            resolve={data?.postResponse}
            errorElement={<p>Error loading map!</p>}
          >
            {(postResponse) =>
              postResponse?.data && postResponse.data.length > 0 ? (
                <Map items={postResponse.data} />
              ) : (
                <p>No map data available</p>
              )
            }
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default ListPage;

import React from "react";
import { Divider, Carousel, Button } from "antd";
import "../components/styles/home.css";
import HomeSlider from "../features/HomeSlider";
import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../services/app.api";
import ProductSlider from "../components/productSlider";
import Footer from "../components/footer";
import {
  BiCategoryAlt,
  BiStore,
  HiOutlineShoppingBag,
  MdOutlineCountertops,
} from "react-icons/all";
import { Link } from "react-router-dom";
export default function Home() {
  const { data, error, isLoading, isSuccess, isError } = useGetProductsQuery();
  return (
    <div className="iBody">
      <div className="iContainer iContainerHome">
        <div className="iHomeHero">
          <HomeSlider />
          <Divider className="iDivider" orientation="center">
            زۆرترین سەردانکراو <MdOutlineCountertops />
          </Divider>
          {/* <Skeleton active avatar /> */}
          <div className="iHomeTopViewer">{data && <ProductSlider />}</div>
        </div>
        <div className="iStores">
          <div className="iHomeCategorys">
            <Divider className="iDivider" orientation="right">
              بەشەکان <BiCategoryAlt />
            </Divider>
            <div className="iHomeCategorysContent">
              <Button>مناڵان</Button>
              <Button>گریمینگ</Button>
              <Button>کاتژمێر</Button>
              <Button>جوانکاری</Button>
              <Button>ناوماڵ</Button>
              <Button>چێشتخانە</Button>
              <Button>مۆبایل</Button>
              <Button>پۆشاکی پیاوان</Button>
              <Button>ئێکسسواراتی ئافرەتان</Button>
              <Button>مناڵان</Button>
              <Button>ئەلیکترۆنیک</Button>
              <Button>کۆزماتیک</Button>
              <Button>پەراوگە</Button>
              <Button>پۆشاکی مناڵان</Button>
              <Button>تەندروستی</Button>
              <Button>کتێب</Button>
              <Button>وەرزش</Button>
              <Button>ئاژەڵ</Button>
              <Button>مناڵان</Button>
            </div>
            <Button type="link">... زیاتر</Button>
          </div>
          <div className="iHomeStores">
            <Divider className="iDivider" orientation="right">
              دوکانەکان <BiStore />
            </Divider>
            <div className="iHomeStoreContent">
              <Link to="store-profile">
                <Button>مۆبایلی سەنا</Button>
              </Link>
              <Button>جوانکاری شڤان</Button>
              <Button>شوشەواتی ماڵی خانمان</Button>
              <Button>بێست شۆپینگ</Button>
              <Button>پۆشاکی دێنیز</Button>
              <Button>بێست بازاڕ</Button>
              <Button>مێخەک ستۆر</Button>
              <Button>بازاڕی ئەلیکترۆنیک</Button>
              <Button>مۆبیلیاتی کارزان</Button>
              <Button>تێکنۆ کورد</Button>
              <Button>پێشەوا کۆزماتیک</Button>
              <Button>جوانکاری شڤان</Button>
              <Button>شوشەواتی ماڵی خانمان</Button>
              <Button>بێست شۆپینگ</Button>
              <Button>مۆبایلی ئاری</Button>
              <Button>پۆشاکی دێنیز</Button>
              <Button>بێست بازاڕ</Button>
              <Button>مێخەک ستۆر</Button>
              <Button>پێشەوا کۆزماتیک</Button>
              <Button>جوانکاری شڤان</Button>
              <Button>شوشەواتی ماڵی خانمان</Button>
              <Button>بێست شۆپینگ</Button>
              <Button>مۆبایلی ئاری</Button>
              <Button>پۆشاکی دێنیز</Button>
              <Button>بێست بازاڕ</Button>
              <Button>مێخەک ستۆر</Button>
            </div>
            <Button type="link">... زیاتر</Button>
          </div>
        </div>
        <div className="iHomeProducts">
          <Divider className="iDivider" orientation="right">
            کاڵاکان <HiOutlineShoppingBag />
          </Divider>

          <div className="iProductCards">
            {isLoading && "Loading..."}
            {isError && error.message}
            {isSuccess &&
              data &&
              data?.map((e, index) => {
                return (
                  <>
                    <ProductCard key={index} product={e} />
                  </>
                );
              })}
          </div>
        </div>
      </div>

      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}

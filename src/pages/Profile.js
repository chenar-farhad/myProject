import "../components/styles/profile.css";
import React from "react";
import ProfilePicture from "../components/profilePicture";
import { Skeleton, Divider, Carousel, Avatar } from "antd";
import { HiLocationMarker, FiSettings, BsTelephone } from "react-icons/all";
import ProductCard from "../components/ProductCard";
export default function Profile() {
  return (
    <div className="iProfileBody">
      <div className="iProfileContainer">
        <div className="iProfileContent">
          {/* <FiSettings size={30} className="iProfileSettingIcon" /> */}
          <div className="iProfileImages">
            {/* <ProfilePicture /> */}
            <Avatar
              size={120}
              src="https://static.nike.com/a/images/f_auto/15feea01-6923-4310-a0d6-f4c3717b52b9/image.jpeg"
            />
          </div>
          
          <div className="iProfileContentHeader">
            <div className="iProfileStoreDes">
              <h1 className="storeName">مۆبایلی ئاری</h1>
              <h2 className="storeLocation">
                <HiLocationMarker color="var(--colorMain1)" />
                سلێمانی سەرو مزگەوتی گەورە
              </h2>

              <p className="storeBio">
                زانیاریەکانتیاسفدگ دگدفگ فبف بدفنه رتندف ەر٥ی هفگبهفگبهفگبهفگب
                زانیاریەکانتیاسفدگ دگدفگ فبف بدفنه رتندف ەر٥ی هفگبهفگبهفگبهفگب
              </p>
            </div>
          </div>
        </div>
        <div className="iProfileProducts">
          <Divider className="iDivider" orientation="center">
            کاڵاکان
          </Divider>
          <div className="iProductCards">
            <ProductCard
              title="هێتسێتی مارکەی بۆس"
              description="کوالیتی زۆر بەرزە و بەکۆمەڵێك ڕەگ بەردەستە."
              image="https://m.media-amazon.com/images/I/51ntWa1Q0sL._AC_SL1200_.jpg"
              price="45,750"
            />
            <ProductCard
              title="موبەریدەی سەرمێز"
              description="فێنکەرەوەی بچووکی سەرمێزی مارکەی"
              image="https://bazarga.com/uploads/products/59/photos/o8QmWkf406BDqi0rKJlKjd8auHLVLKxamRZjojkV.jpeg"
              price="25,000"
            />
            <ProductCard
              title="بیستۆکی بلوتووز"
              description="کوالیتی مامناوەندە و تەنها بەڕەنگی سپی بەردەستە"
              image="https://img.joomcdn.net/f262549fff0a8e864270a70d1893c1f654956226_original.jpeg"
              price="13,000"
            />
            <ProductCard
              title="فاوندەیشن وکۆنسیلەر لە بڕاندی کلینیک"
              description="گونجاوە بۆ هەموو جۆرە پێستێک بەلام نمونەیە بۆ چەور و وشک( پێستی تێکەڵ)"
              image="https://bazarga.com/uploads/products/1651/thumbnail/GBPEKJV1HUz07iYTEfIgYKEMGjlzRqBGwBe1BszD.jpeg"
              price="10,000"
            />
            <ProductCard
              title="جانتای ئافرەتان"
              description="ژانتایەکی نایاب و ژوانە و شانی وایە و باڵی وایە."
              image="https://m.media-amazon.com/images/I/71ez5DApc+L._AC_SL1500_.jpg"
              price="15,000"
            />
            <ProductCard
              title="کالەی وەرزشی"
              description="کالەی وەرزشی بۆ هەردوو ڕەگەز گونجاوە."
              image="https://floimages.mncdn.com/media/catalog/product/21-08/09/alessio-049-anorak-cirtli-filet-cocuk-spor-ayakkabi-siyah-turkuaz-46719.jpeg"
              price="35,000"
            />
            <ProductCard
              title="ئەداپتەری هێدفۆن"
              description="دەتوانی بەم وایەرە هێدفۆن بە ئایفۆنەکەتەوە پەیوەست بکەی"
              image="https://bazarga.com/uploads/products/thumbnail/BdzjEjLmhadwtJ1bX17XX5LPQR0Pa2vhmjqNva5g.gif"
              price="4,500"
            />
            <ProductCard
              title="باندی شاومی"
              description="ژانتایەکی نایاب و ژوانە و شانی وایە و باڵی وایە."
              image="https://bazarga.com/uploads/products/319/thumbnail/H7QoWJYxIyg4lDH0oDRS0LoAU5CRsxBFhLeD0rKi.jpeg"
              price="22,000"
            />
            <ProductCard
              title="کرێمی لابەری مکیاج لە براندی کلینیک"
              description="دەبێتەوە هۆی پاک کردنەوەی دەم وچاو لە پیسی ژینگە ولابردنی مکیاجی ڕۆژانە، ئاسودەی بە پێست ئەبەخشێت"
              image="https://bazarga.com/uploads/products/1651/thumbnail/kY5tg7ZEKG5EEE1mNcqyHHN7e2fkqQHNIljcK5sK.jpeg"
              price="22,500"
            />
            <ProductCard
              title="جانتای هەلگری کەلوپەلی مندالی ساوا"
              description="وانای لە خۆ گرتنی تەواوی پێداویستی منداڵێکی ساوای هەیە  وەک دایبی ، شیر ، جلو بەرگ هتد"
              image="https://bazarga.com/uploads/products/thumbnail/xy9stq8q2Tfo525rT6xWlqZIwlB6Dt1TYDOC58mM.jpeg"
              price="14,250"
            />
            <ProductCard
              title="شامپۆ و مکیفی مناڵان لە مارکەی بالیا"
              description="شامپۆو مکیفی منداڵان لە مارکەی بالیای ئەڵمانی"
              image="https://img.alicdn.com/i2/772743085/O1CN01G2eIRX1YeyPyth0Dj_!!772743085.jpg"
              price="5,000"
            />
            <ProductCard
              title="جانتای ئافرەتان"
              description="ژانتایەکی نایاب و ژوانە و شانی وایە و باڵی وایە."
              image="https://m.media-amazon.com/images/I/612rsbE9f-L._AC_UL1000_.jpg"
              price="22,000"
            />
            <ProductCard
              title="کاتژمیری دەستی پیاوان"
              description="ژانتایەکی نایاب و ژوانە و شانی وایە و باڵی وایە."
              image="https://bazarga.com/uploads/products/thumbnail/1OqPqDkpHvQHn27eNsd9LXpmnh2ejLOZGqpgMOsZ.jpeg"
              price="22,000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

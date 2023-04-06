import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProduct from "@/components/RelatedProduct";

import Wrapper from "@/components/Wrapper";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] ">
          {/* left Column Start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto max-lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* left Column End */}
          {/* Right Column Start */}
          <div className="flex-[1] py-3">
            {/* product Title start */}
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>
            {/* product title End  */}

            {/* product subtitle */}
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>
            {/* product subtitle End */}

            {/* product  price Start */}
            <div className="text-lg font-semibold ">MRP : ₹ 19 695.00</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black[0.5] mb-20 ">
              {`(Also includes all applicable duties)`}
            </div>
            {/* product price End  */}

            {/* product size range start */}
            <div className="mb-10">
              {/* hEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* Heading end */}

              {/* size selection */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] hover:border-black cursor-pointer opacity-50">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] hover:border-black cursor-pointer opacity-50">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] hover:border-black cursor-pointer opacity-50">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] hover:border-black cursor-pointer opacity-50">
                  UK 6
                </div>
              </div>

              {/* Error Message For unavailable */}

              <div className="text-red-500 mt-1">
                Size Selection Is Required .
              </div>
              {/* End Product Size Range */}
              {/* Add to CArt Button Start */}
              <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                Add to Cart
              </button>
              {/* Add to Cart Button End  */}

              {/* Adding WishList Button Start*/}
              <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10 ">
                Wishlist
                <IoMdHeartEmpty size={20} />
              </button>
              {/* Adding Wishlist Button End */}

              <div>
                <div className="text-lg font-bold mb-5">Product Details</div>

                <div className="text-md mb-5">
                  feel unable from the tee box to the final putt in adesign
                  that's pure early MJ: speed, class like visible Air and a
                  translucent rubber sole that continue to stand the test od
                  time. This model fuses the strut of the 1st MJ's championship
                  with some od our best golf technology, helping you make a
                  statement of confidence when it comes time to tame the course
                </div>

                <div className="text-md mb-5">
                  feel unable from the tee box to the final putt in adesign
                  that's pure early MJ: speed, class like visible Air and a
                  translucent rubber sole that continue to stand the test od
                  time. This model fuses the strut of the 1st MJ's championship
                  with some od our best golf technology, helping you make a
                  statement of confidence when it comes time to tame the course
                </div>

                <div className="text-md mb-5">
                  feel unable from the tee box to the final putt in adesign
                  that's pure early MJ: speed, class like visible Air and a
                  translucent rubber sole that continue to stand the test od
                  time. This model fuses the strut of the 1st MJ's championship
                  with some od our best golf technology, helping you make a
                  statement of confidence when it comes time to tame the course
                </div>
              </div>
            </div>
          </div>
          {/* Right Column End  */}
        </div>

        <RelatedProduct />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

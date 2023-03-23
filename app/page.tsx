import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ImageOne from "@/components/imageone/ImageOne";
import ImageThree from "@/components/imagethree/ImageThree";
import ImageTwo from "@/components/imagetwo/ImageTwo";
import NewsLetter from "@/components/newsletter/NewsLetter";
import Programs from "@/components/programs/Programs";
import TopContainer from "@/components/topcontainer/TopContainer";
import UltimateGoal from "@/components/ultimategoal/UltimateGoal";

export default function Home() {
  return (
    <>
      <Header />
      <TopContainer />
      <UltimateGoal />
      <Programs />
      <ImageOne />
      <ImageTwo />
      <ImageThree />
      <NewsLetter />
      <Footer />
    </>
  )
}

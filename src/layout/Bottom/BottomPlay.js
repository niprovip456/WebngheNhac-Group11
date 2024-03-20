import React, { memo } from "react"
import BottomPlayer from "./BottomPlayer"
import BottomRight from "./BottomRight"
import { useSelector } from "react-redux"
import ViewPlayMusicMain from "../../components/ViewPlayMusicFull/ViewPlayMusicMain"

const BottomPlay = () => {
   const isOpen = useSelector((state) => state.toggleOpenMain.isOpen)
   const isOpenClass = useSelector((state) => state.toggleOpenMain.isOpenClass)

   return (
      <div className={`playing-bar ${isOpenClass ? "active" : ""}`}>
         <BottomPlayer></BottomPlayer>
         <BottomRight></BottomRight>
         {isOpen && <ViewPlayMusicMain></ViewPlayMusicMain>}
      </div>
   )
}

export default memo(BottomPlay)

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

interface IResize {
  card: any;
}
export function Resizable({ card }: IResize) {
  return (
    <div>
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full pr-10 pb-10"
      >
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full items-center  justify-center ">
            <img src={card.poster?.vertical} alt="" />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={60}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center">
                <img
                  src={card.poster?.lands.land1}
                  className="h-full w-full"
                  alt=""
                />
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center">
                <img
                  src={card.poster?.lands.land2}
                  className="h-full w-full"
                  alt=""
                />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

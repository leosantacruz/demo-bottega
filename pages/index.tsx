// @ts-ignore
"use client";
import axios from "axios";

import { useRef, useState, useEffect } from "react";
import Head from "next/head";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Viewer from "@/components/viewer";
import LoadingScreen from "@/components/loadingScreen";
import PleaseRotate from "@/components/pleaseRotate";

import { initService } from "@/utils/sketchfab";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export default function Home({ data }: any) {
  const apiRef: any = useRef(null);
  const [modelId, setModelId] = useState("24523f1bb77c4b20b39d12d906938ec5");
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [materials, setMaterials] = useState<any>([]);
  const [nodes, setNodes] = useState<any>([]);
  const [defaultTextureId, setDefaultTextureId] = useState<any>(null);
  useEffect(() => {
    if (materials[0] && nodes[0]) {
      initService(apiRef.current, materials, nodes);

      let defaultId = materials.filter((r: any) => {
        return r.name == "Leather_001";
      })[0]?.channels.NormalMap.texture.uid;
      console.log({ defaultId });
      setDefaultTextureId(defaultId);
    }
  }, [materials, nodes]);
  return (
    <>
      <div className="w-full grid grid-cols-[1fr,550px]">
        <Head>
          <title>Ibisdev - Configurator</title>
        </Head>
        <PleaseRotate />
        <Header />
        {showLoading && <LoadingScreen />}
        <Viewer
          apiRef={apiRef}
          modelId={modelId}
          setIsModelLoaded={setIsModelLoaded}
          setMaterials={setMaterials}
          setNodes={setNodes}
          setShowLoading={setShowLoading}
        />
        {materials.length > 0 && (
          <Sidebar defaultTextureId={defaultTextureId}></Sidebar>
        )}
      </div>
    </>
  );
}

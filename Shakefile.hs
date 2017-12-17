#!/usr/bin/env stack
{- stack
  script
  --resolver lts-9.18
  --package shake-0.16
  --
  +RTS -s -RTS
-}

import           Development.Shake
import           Development.Shake.Command
import           Development.Shake.FilePath
import           Development.Shake.Util
import Control.Monad
import Turtle (ls)

yarnRun :: String -> FilePath -> Action ()
yarnRun c dir = cmd_ (Cwd dir) Shell (AddPath paths []) ("yarn run " ++ c)
  where paths = ["/run/current-system/sw/bin", "/home/bjorn/.node_modules/bin/yarn"]

getDirectoryDirsFullPath :: FilePath -> Action [FilePath]
getDirectoryDirsFullPath relDir = do
  dirs <- getDirectoryDirs "packages"
  return $ ("packages" </>) <$> dirs

main :: IO ()
main = shakeArgs shakeOptions{shakeColor=True} $ do
  phony "lint" $ do
    dirs <- getDirectoryDirsFullPath "packages"
    forM_ dirs (yarnRun "lint")


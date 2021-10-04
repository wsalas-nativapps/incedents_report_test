import { Alert } from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";

export const ImageManager: any = {
  MIN_PROFILE_HEIGHT: 512,
  MIN_IMAGE_HEIGHT: 1048,
  COMPRESS_QLTY: 0.4,

  PickImage: async (
    onRequestPermission: any,
    allowsEditing = true,
    defaultAspectRatio = [1, 1],
    minImageHeight = ImageManager.MIN_IMAGE_HEIGHT
  ) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Se necesita acceso a la Galería",
        "Permite el acceso a la galería para agregar una imagen",
        [
          { text: "Cancelar", style: "cancel" },
          {
            text: "OK",
            onPress: async () => {
              onRequestPermission(
                await ImageManager.PickImageWithPermission(
                  allowsEditing,
                  defaultAspectRatio,
                  minImageHeight
                )
              );
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      onRequestPermission(
        await ImageManager.PickImageWithPermission(
          allowsEditing,
          defaultAspectRatio,
          minImageHeight
        )
      );
    }
  },

  PickImageWithPermission: async (
    allowsEditing: any,
    aspectRatio: any,
    minImageHeight: any
  ) => {
    const _minImageHeight =
      minImageHeight !== ImageManager.MIN_IMAGE_HEIGHT
        ? minImageHeight
        : ImageManager.MIN_IMAGE_HEIGHT;
    let imagePicked = false;
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === "granted") {
      const img = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: allowsEditing,
        aspect: aspectRatio,
        quality: 0.4,
      });
      if (!img.cancelled) {
        let manipResult: any = img;
        if (img.height > _minImageHeight) {
          manipResult = await ImageManipulator.manipulateAsync(
            img.uri,
            [{ resize: { height: _minImageHeight } }],
            { compress: ImageManager.COMPRESS_QLTY }
          );
        }
        imagePicked = manipResult.uri;
      }
    }
    return imagePicked;
  },

  TakePhoto: async (
    onRequestPermission: any,
    allowsEditing = true,
    defaultAspectRatio = [1, 1],
    minImageHeight = ImageManager.MIN_IMAGE_HEIGHT
  ) => {
    const statusCamera = await Camera.requestPermissionsAsync();
    if (statusCamera.status !== "granted") {
      Alert.alert(
        "Se necesita acceso a la Cámara",
        "Permite el acceso a la cámara para agregar una foto",
        [
          { text: "Cancelar", style: "cancel" },
          {
            text: "OK",
            onPress: async () => {
              onRequestPermission(
                await ImageManager.TakePhotoWithPermission(
                  allowsEditing,
                  defaultAspectRatio,
                  minImageHeight
                )
              );
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      onRequestPermission(
        await ImageManager.TakePhotoWithPermission(
          allowsEditing,
          defaultAspectRatio,
          minImageHeight
        )
      );
    }
  },

  TakePhotoWithPermission: async (
    allowsEditing: any,
    aspectRatio: any,
    minImageHeight: any
  ) => {
    const _minImageHeight =
      minImageHeight !== ImageManager.MIN_PROFILE_HEIGHT
        ? minImageHeight
        : ImageManager.MIN_PROFILE_HEIGHT;
    let photoLoaded = false;
    const statusCamera = await Camera.requestPermissionsAsync();
    if (statusCamera.status === "granted") {
      const img = await ImagePicker.launchCameraAsync({
        allowsEditing: allowsEditing,
        aspect: aspectRatio,
        quality: 0.4,
      });
      if (!img.cancelled) {
        let manipResult: any = img;
        if (img.height > _minImageHeight) {
          manipResult = await ImageManipulator.manipulateAsync(
            img.uri,
            [{ resize: { height: _minImageHeight } }],
            { compress: ImageManager.COMPRESS_QLTY }
          );
        }
        photoLoaded = manipResult.uri;
      }
    }
    return photoLoaded;
  },
};

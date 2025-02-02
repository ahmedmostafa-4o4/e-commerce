export default function productImage(imageUrl) {
    return `${process.env.REACT_APP_IMAGE_BASE_URL}${imageUrl}`
}
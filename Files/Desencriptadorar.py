from stegano import lsb
import base64

# Ruta de la imagen con el archivo oculto
image_with_secret_path = "imagen_con_rar.png"
output_rar_file_path = "archivo_recuperado.rar"

# Recuperar el texto escondido en la imagen
hidden_text = lsb.reveal(image_with_secret_path)

# Decodificar el texto base64 a bytes
decoded_bytes = base64.b64decode(hidden_text)

# Guardar los bytes decodificados en un archivo .rar
with open(output_rar_file_path, "wb") as file:
    file.write(decoded_bytes)

print("Archivo .rar desencriptado de la imagen correctamente.")

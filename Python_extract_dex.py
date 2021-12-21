from PIL import Image
import struct
##Path to files.
image_file = "/home/krilin4/Escritorio/Android/Learning/Hydra_dropper/46aeb04f2f03ebe7c716fc6e58a5dea763cd9b00eb7a466d10a0744f50a7368f/assets/prcnbzqn.png"
so_file = "/home/krilin4/Escritorio/Android/Learning/Hydra_dropper/46aeb04f2f03ebe7c716fc6e58a5dea763cd9b00eb7a466d10a0744f50a7368f/lib/x86/libhoter.so"

#Valores Obtenidos de las funciones de Ghidra.
offset = 0x34755 ##Esta es la RA de la libreria donde esta la seccion de memoria que contiene los datos con los que haremos el segundo XOR
size = 0x1fa

#Archivo de salida.
output_file = "drop.dex"





#Abrimos el archivo
im = Image.open(image_file)
rgb_im = im.convert('RGB') #Estemetod es el que transforma cada uno de los pixeles en una Paleta de colores (funcionamiento como el bitmap)
im_y = im.size[1] #Height
im_x = im.size[0] #withd

##DUDA DE DONDE LO SACA!!!
dex_size = im_y*im_x/2-255 
print(str(hex(im_y))+ str(hex(im_x)))
print("Dex Size=" + str(dex_size))

#Hemos modificado el script para adaptarlo a python3
with open(so_file, "rb") as f:
    d = f.read()
    print (d)
    d = d[offset:offset+size]


def decrypt_pixel(p1,p2,p3):
  return (p1<<2 &4 | p2 & 2 | p2 & 1 | p1 << 2 & 8 | p3)

def dex_extractor(p1,p2):
    #print ("p1_int =" + str(p1))
    #print ("p2_int =" + str(p2))
    return (int)((p1/size)*size) & 0xffffff00| d[p1%size] ^ p2

count = 0
dex_file = open(output_file,"wb")
second = 0
magic_byte = 0
for y in range(0,im.size[1]):
  for x in range(0,im.size[0]):
    r, g, b = rgb_im.getpixel((x, y)) #Obtenemos el valor del pixel en formato RGB
    magic_byte = decrypt_pixel(r,b,magic_byte) ##Decrypt_pixel_value
    if second < 4:
        magic_byte = magic_byte << 4
        second = second + 4      
    else:
        #print (str(magic_byte))
        magic_byte = magic_byte & 0xff ##Creo que es para asegurarse que el tamaño es de 1 byte.
        #print (str(magic_byte))
        dex_byte = dex_extractor(count,magic_byte)
        dex_byte = dex_byte &0xff ##Lo mismo para quedarnos con un Byte como tal
        #El if viene del tipo de encryptacion angeCryption(en el que los datos encryptados comienzan a partir del count8)
        if count > 7 and count-8 < dex_size:
            dex_file.write(struct.pack("B",dex_byte))
        magic_byte = 0
        second = 0 #Variable que se encarga de decir si entramos o no aqui
        count+=1
dex_file.close()
import ghidra.app.script.GhidraScript
import exceptions
import ghidra.program.flatapi
from ghidra.program.model.address import AddressOutOfBoundsException
from ghidra.program.model.symbol import SourceType

def xor_block(addr,size):
    ## get byte list
    first_block = getBytes(toAddr(addr),size).tolist()
    second_block = getBytes(toAddr(addr+size),size).tolist()
    a = ""
    ## decrypt the block
    for i in range(len(first_block)):
        a += chr(first_block[i]^second_block[i])
        ## each string have trash value at the end, delete it
    trash = len("someval")
    return a[:-trash]
    
def block(addr):
    ## block that related to creation of dex file as argument
    if addr == currentProgram.getImageBase().getOffset() + 0x34755:
        return currentProgram.getImageBase().getOffset() + 0x0003494f
    ## get xrefs toAddr() --> toAddr() converts a string to Address you can combine both
    ## getReferencesTo takes an address
    xrefs = getReferencesTo(toAddr(addr))
    ##print("[+] Obtenemos las xrefs..." + str(len(xrefs)))
    if len(xrefs) ==0:
        ## no xrefs go to next byte
        return addr+1
    for xref in xrefs:
        ##print("[+] Log entramos aqui..")
        ref_addr = xref.getFromAddress()
        try:
            inst = getInstructionAt(ref_addr.add(32))
        except AddressOutOfBoundsException as e:
            print("Found last xor block exiting..")
            exit()
            
        ## Get size of block with inst.getByte(2)
        block_size = inst.getByte(2)
        ## decrypt blocks
        dec_str = xor_block(addr,block_size)
        ## get function
        func = getFunctionBefore(ref_addr)
        new_name = "dec_"+dec_str[:-1]
        ## rename the function
        func.setName(new_name,SourceType.USER_DEFINED)
        ## log
        print("Block : {} , func : {}, dec string : {}".format(hex(addr),func.getEntryPoint(),dec_str))
    return addr+2*block_size

def extract_encrypted_str():
    ## starting block 0x34035 (RA)
    print "Imagebase: " + hex(currentProgram.getImageBase().getOffset())
    print "Posibles BP interesantes: " + hex(currentProgram.getImageBase().getOffset() +0x8ba8)+ " and " + hex(currentProgram.getImageBase().getOffset() + 0x8c80)
    ##Primer memoria que se usa en XOR es:
    curr_block_location = currentProgram.getImageBase().getOffset() + 0x34035
    for i in range(200):
        curr_block_location = block(curr_block_location)
def run():
    extract_encrypted_str()

run()

# Steps to set up Azure blob fuse

1. Set up a Linux VM (ubuntu 18.4)
2. Blob Fuse Setup 
    Setup Storage account (container)
    Mount Blob storage as a file system with blobfuse (https://docs.microsoft.com/en-us/azure/storage/blobs/storage-how-to-mount-container-linux)
3.	On the VM setup docker [Optional] 
4.	Mount the volume into the container 
    `docker run -it -v "$(pwd)":/mycontainer1 az-blob-fuse-reader-writer /bin/ash`
5.	Read and write files from and to this folder (internally to azure storage)
6. Azure blob fuse can be used in AKS (https://github.com/Azure/kubernetes-volume-drivers/blob/master/flexvolume/blobfuse/README.md)

## Some considerations
1.	Blobfuse stores all open file contents in the temporary path. Make sure to have enough space to accommodate all open files
2.	-o allow_other to give access to other accounts

## Demo
The demo creates some text files and stores them in your storage account
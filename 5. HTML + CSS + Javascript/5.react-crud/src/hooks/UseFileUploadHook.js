import { useState } from "react";

export const useFileUploadHook = () => {
    export const useFileUploadHook = ({
        title,
        content,
        category,
        postId,
        navigate,
        queryClient
    }) => {}
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);

    // 이미지 미리보기 생성하는 함수
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);

        // 이미지 미리보기 생성
        //  - 하나 이상의 파일을 업로드했을 경우
        if (files.length > 0) {
            const reader = new FileReader();

            // 파일 리더 생성 후 실행
            reader.onload = (event) => {
                // 사용자가 업로드한 이미지(데이터) 저장
                setImagePreview(event.target.result);
            }
            // 첫 번째 파일 읽기 (이 부분에서 프리뷰 생성)
            reader.readAsDataURL(files[0])
        } else {
            setImagePreview(null);
        }
        try {
        // FormData 생성 (파일 업로드를 위해)
        const formData = new FormData();

        // BoardDTO.EditRequest 필드 추가
        formData.append('title', title);
        formData.append('content', content);
        formData.append('category', category);

        // 파일 추가 (여러 파일 가능)
        selectedFiles.forEach((file) => {
            formData.append('files', file);
        });

        console.log('[NoticeEdit] 수정 요청 데이터:', {
            id: postId,
            title,
            content,
            category,
            filesCount: selectedFiles.length
        });

        // API 호출
        await noticeEditApi(postId, formData);

        // 디테일 페이지 쿼리 캐시 무효화하여 최신 데이터를 다시 조회하도록 함
        queryClient.invalidateQueries({ queryKey: ['noticeDetail', postId] });

        alert('공지사항이 수정되었습니다.');
        navigate(`/notice/detail/${postId}`);
    } catch (error) {
        console.error('[NoticeEdit] 수정 실패:', error);

        if (error.response) {
            // 서버 응답 에러
            const errorMessage = error.response.data?.message ||
                error.response.data?.error ||
                '게시글 수정 중 오류가 발생했습니다.';
            alert(errorMessage);

            // 인증 오류인 경우 로그인 페이지로 리다이렉트
            if (error.response.status === 401 || error.response.status === 403) {
                navigate('/login');
            }
        } else if (error.request) {
            alert('서버에 연결할 수 없습니다. 서버가 실행 중인지 확인해주세요.');
        } else {
            alert('요청 처리 중 오류가 발생했습니다: ' + error.message);
        }
    } finally {
        setIsSubmitting(false);
    }
};
    }
    

return {
    selectedFiles,
    imagePreview,
    handleImageChange
}
}
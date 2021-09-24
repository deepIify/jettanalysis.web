---
title: 정식 링크 태그 (Canonical URL Tag)
description: 검색엔진 최적화를 위한 정식 URL 태그에 대해서 소개해드리겠습니다.
color: '#000'
backgroundColor: '#80d6fc'
backgroundColorForPreview: '#b8e9ff'
img: '/images/wiki_canonical.png'
createdAt: '2021-09-07 00:00:00'
updatedAt: '2021-09-07 00:00:00'
author:
  name: 엔지니어
tags: ['정식 URL', '캐노니컬 URL', '정식 링크', 'canonical URL', 'canonical link']
---

정식 링크(표준 링크, 정식 URL이라고도 함)는 컨텐츠의 원본 소스를 나타내기 위한 웹페이지의 HTML 요소입니다. 정식 링크는 사이트 내의 여러 페이지에 동일하거나 거의 동일한 콘텐츠가 포함되어 있을 때 발생하는 중복 컨텐츠로 인한 검색엔진 최적화 문제를 해결하는데 사용됩니다.

<!--more-->

이 중복 컨텐츠 문제는 다음과 같은 경우와 같이 웹 사이트 관리자가 인지하지 못할 수 있습니다.

- 웹 페이지 URL에 `www` 서브 도메인이 있거나 없이 모두 액세스할 수 있는 경우
- 웹 페이지는 `HTTP` 및 `HTTPS` 프로토콜 모두를 통해 액세스할 수 있는 경우
- 다른 URL을 사용하는 여러 버전의 웹 페이지가 있는 경우 (예: 인쇄 버전 또는 정렬 범주를 사용할 때 등)

SEO 목적을 위해 정식 링크는 컨텐츠의 원본 소스이면서 검색결과에 표시되어야 하는 URL을 제공해야합니다. 정식 링크 정보를 각 검색엔진의 크롤러가 수집하여 각 검색엔진의 검색결과에 정식링크를 노출할 수 있도록 해줍니다. 정식 링크를 웹 페이지에 표시하는 방법은 HTML 헤드에 링크 태그를 추가해주는 것입니다. 정식링크는 선택사항이고 부적절하게 사용되는 경우 검색엔진이 이를 무시할 수 있습니다.

이상적으로는 사이트의 모든 페이지에 표준 링크가 포함되어 미래에 콘텐츠가 중복될 위험을 방지해야 합니다.

## 정식 링크의 올바른 사용

```text
1. http://www.example.com/product.html (일반 페이지)
2. http://www.example.com/product_print.html (동일한 컨텐츠의 프린트용 페이지)
```

```html
<head>

<link rel="canonical" content="http://www.example.com/product.html">

</head>
```

정식 URL 버전을 나타내기 위해 위와 같이 웹 페이지의 `<head>`에 정식 링크가 추가됩니다. 프린트 버전 페이지에 위와 같이 작성하여 검색엔진에 정식링크는 일반 페이지임을 알릴 수 있습니다.

<simple-diagnosis title='정식 링크 SEO 진단하기' description='검색엔진 최적화를 위한 정식 링크를 진단해보세요.'></simple-diagnosis>

정식 태그를 사용해야 하는 경우 두 페이지에 거의 동일한 컨텐츠로 구성되어 있어야합니다. 이는 두 페이지의 텍스트와 이미지가 대체로 동일해야 함을 의미합니다. 페이지가 동일한 주제와 관련되어 있지만 동일한 콘텐츠가 포함되어 있지 않은 경우 검색 엔진이 링크를 무시하거나 향후 검색엔진에서 해당 웹사이트의 모든 링크를 무시할 수도 있습니다. 예를 들어, 한 페이지에 여러 표준 링크가 설정된 경우에 발생할 수 있습니다.

또한 링크의 대상 페이지가 실제로 존재하고 `noindex` 로봇 메타 태그를 포함하지 않는지 확인해야 합니다. 또한 검색엔진의 검색결과에 표시하기를 원하는 페이지여야 합니다.

또한 이러한 종류의 링크는 페이지 번호를 매긴 웹페이지에 사용할 수 없습니다. 즉, 페이지 매김의 1페이지를 가리키는 2, 3페이지 등에 대한 정식 링크를 추가해서는 안 됩니다. 이러한 페이지는 주제별로 관련되어 있지만 동일한 컨텐츠는 아닙니다. 만약 이렇게 정식 링크가 사용된 경우, 1페이지만 검색 결과에 표시되고 다른 모든 페이지는 무시됩니다.

이러한 요구 사항을 간과하지 않도록 핵심 사항에 대한 간단한 체크리스트를 작성했습니다.

- 두 페이지의 내용이 거의 동일한지
- 각 페이지에 하나의 표준 링크만 있는지
- 대상 페이지가 실제로 존재하는지
- 대상 페이지에 `noindex` 메타 태그가 없는지
- 정식 페이지가 검색결과에 나타나길 원하는 페이지인지
- 페이지 번호를 매긴 페이지에 대해서 다른 페이지의 정식링크를 추가하지는 않았는지
- 정식 링크가 HTML 코드의 본문이 아니라 헤드에 있는지

## 정식 링크 태그의 SEO 장점

정식 링크 태그의 장점은 해당 페이지에 직접 추가할 수 있다는 것입니다. 서버 측 리디렉션의 경우처럼 서버 구성에 대한 액세스 권한이 필요하지 않습니다. 또한 태그를 사용하여 다른 URL로 리디렉션할 필요 없이 표준 페이지를 지정할 수 있습니다.

또한 표준 링크를 사용할 때 Google은 더 이상 개별 URL의 순위를 분할하지 않고 묶음으로써 검색 결과에서 표준 페이지의 순위를 향상시킵니다.